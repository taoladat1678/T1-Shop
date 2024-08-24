import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const NewProducts = ({ currentCategory }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { keyword } = useParams(); // Lấy keyword từ URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3000/api/products";

        if (keyword) {
          url = `http://localhost:3000/api/products/search/${encodeURIComponent(keyword)}`; // Tìm kiếm sản phẩm theo keyword
        } else if (currentCategory) {
          url = `http://localhost:3000/api/products/categoryId/${currentCategory}`; // Fetch sản phẩm theo danh mục
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentCategory, keyword]); // Fetch lại khi currentCategory hoặc keyword thay đổi

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Thêm vào giỏ hàng thành công!");
  };

  const productList = products.map((item) => (
    <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
      <div className="product">
        <div className="product-img">
          <img alt={item.name} src={`./img/${item.img}`} />
          <div className="product-label">
            <span className="new">MỚI</span>
          </div>
        </div>
        <div className="product-body">
          <h3 className="product-name">
            <Link to={`/product/${item.id}/${encodeURIComponent(item.name)}`}>{item.name}</Link>
          </h3>
          <h4 className="product-price">{item.price.toLocaleString()} VND</h4>
          <div className="product-rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="product-btns">
            <button className="add-to-wishlist">
              <i className="fa fa-heart-o" />
              <span className="tooltipp">Thêm vào yêu thích</span>
            </button>
            <button className="add-to-compare">
             
            <i className="fa fa-exchange" />
              <span className="tooltipp">So sánh</span>
            </button>
            <Link to={`/product/${item.id}`} className="quick-view">
              <i className="fa fa-eye" />
              <span className="tooltipp">Xem nhanh</span>
            </Link>
          </div>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
            <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">{currentCategory ? 'Sản phẩm theo danh mục' : 'Sản phẩm mới'}</h3>
            </div>
          </div>
        </div>
        <div className="row">{productList}</div>
        <ToastContainer />
      </div>
    </div>
  );
};

NewProducts.propTypes = {
  currentCategory: PropTypes.number,
};

export default NewProducts;