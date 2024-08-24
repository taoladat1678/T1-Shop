import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout as logoutAction } from './Logout';
import { toast } from 'react-toastify';
import './style.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/font-awesome.min.css';
import '../../../public/css/nouislider.min.css';
import '../../../public/css/slick-theme.css';
import '../../../public/css/slick.css';

const Header = ({ onCategoryChange, user, setUser }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        if (!response.ok) {
          throw new Error('Lỗi kết nối mạng');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh mục:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSelectChange = (event) => {
    const categoryId = parseInt(event.target.value, 10);
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  const handleDropdownToggle = (event) => {
    event.preventDefault();
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchKeyword.trim()) {
      navigate(`/search/${encodeURIComponent(searchKeyword)}`);
    }
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('fullName');
    localStorage.removeItem('isAdmin');
    setUser(null); // Cập nhật lại trạng thái người dùng về null
    toast.success('Đăng xuất thành công'); // Hiển thị thông báo
    navigate('/');
  };
  

  const cateList = categories.map((item) => (
    <option key={item.id} value={item.id}>
      {item.name}
    </option>
  ));

  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="#">
                <i className="fa fa-phone" /> 03-614-81-05875
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope-o" /> shop@t1.gg
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker" /> 1734 Stonecoal Road
              </a>
            </li>
          </ul>
          <ul className="header-links pull-right">
            <li>
              <a href="#">
                <i className="fa fa-dollar" /> USD
              </a>
            </li>
            <li className="dropdown">
              <a href="#" onClick={handleDropdownToggle}>
                <i className="fa fa-user-o" />
                {user ? `Xin chào, ${user.fullName}` : 'Tài khoản của tôi'}
                <i className={`fa fa-chevron-${isDropdownOpen ? 'up' : 'down'}`} />
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {user ? (
                    <>
                      <li><Link to="/change-password">Đổi mật khẩu</Link></li>
                      <li><a href="#" onClick={handleLogout}>Đăng xuất</a></li>
                    </>
                  ) : (
                    <>
                      <li><Link to="/login">Đăng nhập</Link></li>
                      <li><Link to="/register">Đăng ký</Link></li>
                    </>
                  )}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <a className="logo" href="#">
                  <img alt="Logo" src="/img/t1-logo.jpg" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-search">
                <form onSubmit={handleSearchSubmit}>
                  <select className="input-select" value={selectedCategory} onChange={handleSelectChange}>
                    <option value="0">Tất cả danh mục</option>
                    {cateList}
                  </select>
                  <input
                    className="input"
                    placeholder="Tìm kiếm sản phẩm ở đây"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                  />
                  <button className="search-btn">Tìm kiếm</button>
                </form>
              </div>
            </div>
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                <div>
                  <a href="#">
                    <i className="fa fa-heart-o" />
                    <span>Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>
                <div className="dropdown">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart" />
                    <span>Giỏ hàng</span>
                    {cartQuantity > 0 && <div className="qty">{cartQuantity}</div>}
                  </Link>
                </div>
                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars" />
                    <span>Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    fullName: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Header;
