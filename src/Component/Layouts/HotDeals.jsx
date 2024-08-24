import "./style.css";
import "../../../public/css/bootstrap.min.css";
import "../../../public/css/font-awesome.min.css";
import "../../../public/css/nouislider.min.css";
import "../../../public/css/slick-theme.css";
import "../../../public/css/slick.css";

const HotDeals = () => {
  return (
    <>
      <div className="section" id="hot-deal">
        <div className="container">
          <div className="row">
            <div className="col-md-4 hot-deal-left">
              <img src="./img/t1-4s-rmv.jpg" alt="Left Deal" />
            </div>
            <div className="col-md-4 hot-deal-center">
              <div className="hot-deal">
                <ul className="hot-deal-countdown">
                  <li>
                    <div>
                      <h3>02</h3>
                      <span>Ngày</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>10</h3>
                      <span>Giờ</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>34</h3>
                      <span>Phút</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h3>60</h3>
                      <span>Giây</span>
                    </div>
                  </li>
                </ul>
                <h2 className="text-uppercase">
                  T1 Vô Địch EWC
                </h2>
                <p>Ăn Mừng Thả Ga 50%</p>
                <a className="primary-btn cta-btn" href="#">
                  Vào Ngay
                </a>
              </div>
            </div>
            <div className="col-md-4 hot-deal-right">
              <img src="./img/t1-4s-rmv.jpg" alt="Right Deal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDeals;
