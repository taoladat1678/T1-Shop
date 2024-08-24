
import { Link } from "react-router-dom";
import './style.css'; // Import CSS styles
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/font-awesome.min.css';
import '../../../public/css/nouislider.min.css';
import '../../../public/css/slick-theme.css';
import '../../../public/css/slick.css';

const Navigation = () => {
  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <ul className="main-nav nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/hot-deals">Ưu đãi Hot</Link></li>
            <li><Link to="/new-products">Sản phẩm mới</Link></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
