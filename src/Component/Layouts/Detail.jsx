
import "./style.css";
import "../../../public/css/bootstrap.min.css";
import "../../../public/css/font-awesome.min.css";
import "../../../public/css/nouislider.min.css";
import "../../../public/css/slick-theme.css";
import "../../../public/css/slick.css";

const Detail = () => {
  return (
    <>
        <section className="section">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-md-push-2">
        <div id="product-main-img">
          <div className="product-preview">
            <img
              alt=""
              src="/img/t1-logo.jpg"
            />
          </div>
        </div>
      </div>
      <div className="col-md-2  col-md-pull-5">
        <div id="product-imgs">
          <div className="product-preview">
            <img
              alt=""
              src="img/t1-logo.jpg"
            />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="product-details">
          <h2 className="product-name">
            Tên sản phẩm ở đây
          </h2>
          <div>
            <h3 className="product-price">
              $980.00
            </h3>
            <span className="product-available">
              Còn hàng
            </span>
          </div>
          <p>
            Thông tin mô tả sản phẩm sẽ được đặt ở đây. Có thể là một mô tả ngắn về sản phẩm, các tính năng chính, v.v.
          </p>
          <div className="product-options">
            <label>
              Kích cỡ:
            </label>
            <select className="input-select">
              <option value="0">
                Chọn kích cỡ
              </option>
              <option value="1">
                Size S
              </option>
              <option value="2">
                Size M
              </option>
              <option value="3">
                Size L
              </option>
            </select>
          </div>
          <div className="add-to-cart">
            <div className="qty-label">
              Số lượng
              <div className="input-number">
                <input
                  defaultValue="1"
                  type="number"
                />
                <span className="qty-up">
                  +
                </span>
                <span className="qty-down">
                  -
                </span>
              </div>
            </div>
            <button className="add-to-cart-btn">
              <i className="fas fa-shopping-cart" />
              {' '}Thêm vào giỏ hàng
            </button>
          </div>
          <ul className="product-btns">
            <li>
              <a href="#">
                <i className="far fa-heart" />
                {' '}Thêm vào danh sách mong muốn
              </a>
            </li>
          </ul>
          <ul className="product-links">
            <li>
              Chia sẻ:
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Detail;
