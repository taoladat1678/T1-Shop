import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./style.css";

const DetailProduct = () => {
  const { id } = useParams(); // Lấy id từ URL sử dụng useParams từ React Router
  const [product, setProduct] = useState(null); // State để lưu trữ thông tin chi tiết sản phẩm

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Không thể lấy thông tin sản phẩm");
        }
        const data = await response.json();
        setProduct(data); // Lưu thông tin sản phẩm vào state
      } catch (error) {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
      }
    };

    fetchProduct();
  }, [id]); // Khi id thay đổi, useEffect sẽ chạy lại để lấy thông tin sản phẩm mới

  if (!product) {
    return <div>Đang tải...</div>; // Hiển thị thông báo khi đang tải dữ liệu
  }

  return (
    <div className="detail-product">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-md-push-2">
            <div id="product-main-img">
              <div className="product-preview">
                <img alt={product.name} src={`/img/${product.img}`} />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-md-pull-5">
            {/* Phần tùy chỉnh nếu cần */}
          </div>
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <div>
                <h3 className="product-price">{product.price.toLocaleString()} VND</h3>
                <span className="product-available">Còn hàng</span>
              </div>
              <p>{product.description}</p> {/* Thêm mô tả sản phẩm từ API */}
              <div className="product-options">
                <label>Kích cỡ:</label>
                <select className="input-select">
                  <option value="0">Chọn kích cỡ</option>
                  {/* Thêm các tùy chọn kích cỡ từ API nếu có */}
                </select>
              </div>
              <div className="add-to-cart">
                <div className="qty-label">
                  Số lượng
                  <div className="input-number">
                    <input defaultValue="1" type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">
                  <i className="fas fa-shopping-cart" /> Thêm vào giỏ hàng
                </button>
              </div>
              <ul className="product-btns">
                <li>
                  <a href="#">
                    <i className="far fa-heart" /> Thêm vào danh sách mong muốn
                  </a>
                </li>
              </ul>
              <ul className="product-links">
                <li>Chia sẻ:</li>
                {/* Thêm các nút chia sẻ từ API nếu có */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailProduct.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailProduct;
