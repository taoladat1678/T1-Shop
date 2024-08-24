
import "./style.css";
import "../../../public/css/bootstrap.min.css";
import "../../../public/css/font-awesome.min.css";
import "../../../public/css/nouislider.min.css";
import "../../../public/css/slick-theme.css";
import "../../../public/css/slick.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* top footer */}
      <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Về chúng tôi</h3>
                <p>
                  Đội tuyển T1 là một trong những đội hàng đầu trong làng esports, chuyên tham gia các giải đấu lớn và đã giành nhiều danh hiệu quốc tế.
                </p>
                <ul className="footer-links">
                  <li><a href="#"><i className="fa fa-map-marker"></i>627 Đường Seolleung, Gangnam-gu, Seoul</a></li>
                  <li><a href="#"><i className="fa fa-phone"></i> 02-6009-2500 (Hoạt động từ 12 giờ trưa đến 4 giờ chiều / Nghỉ ngày lễ)</a></li>
                  <li><a href="#"><i className="fa fa-envelope-o"></i> E-mail : shop@t1.gg</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Danh mục</h3>
                <ul className="footer-links">
                  <li><a href="#">Sản phẩm hot</a></li>
                  <li><a href="#">Laptop</a></li>
                  <li><a href="#">Điện thoại thông minh</a></li>
                  <li><a href="#">Máy ảnh</a></li>
                  <li><a href="#">Phụ kiện</a></li>
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs"></div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Thông tin</h3>
                <ul className="footer-links">
                  <li><a href="#">Về chúng tôi</a></li>
                  <li><a href="#">Liên hệ</a></li>
                  <li><a href="#">Chính sách bảo mật</a></li>
                  <li><a href="#">Đơn hàng và Đổi trả</a></li>
                  <li><a href="#">Điều khoản sử dụng</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Dịch vụ</h3>
                <ul className="footer-links">
                  <li><a href="#">Tài khoản của tôi</a></li>
                  <li><a href="#">Xem giỏ hàng</a></li>
                  <li><a href="#">Yêu thích</a></li>
                  <li><a href="#">Theo dõi đơn hàng</a></li>
                  <li><a href="#">Trợ giúp</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /top footer */}

      {/* bottom footer */}
      <div id="bottom-footer" className="section">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                <li><a href="#"><i className="fa fa-credit-card"></i></a></li>
                <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
              </ul>
              <span className="copyright">
                © <script>document.write(new Date().getFullYear());</script> Bản quyền đã đăng ký | Mẫu này được tạo bởi <i className="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </span>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bottom footer */}
    </footer>
  );
};

export default Footer;
