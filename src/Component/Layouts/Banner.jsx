
import "./style.css"; // Import file CSS cho banner (ví dụ là Banner.css)

const Banner = () => {
  return (
    <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img
                alt=""
                src="./img/t1_banner.jpg"
              />
            </div>
            <div className="shop-body">
              <h3>
                Bộ sưu tập
                <br />
                Ốp lưng điện thoại
              </h3>
              <a
                className="cta-btn"
                href="#"
              >
                Vào ngay{' '}
                <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img
                alt=""
                src="./img/t1-4s.jpg"
              />
            </div>
            <div className="shop-body">
              <h3>
                Ăn mừng 
                <br />
                Khi T1 là nhà vô địch
              </h3>
              <a
                className="cta-btn"
                href="#"
              >
                Vào ngay{' '}
                <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-6">
          <div className="shop">
            <div className="shop-img">
              <img
                alt=""
                src="./img/t1-note-book.jpg"
              />
            </div>
            <div className="shop-body">
              <h3>
                Phụ kiện T1
                <br />
                Cực thư sinh
              </h3>
              <a
                className="cta-btn"
                href="#"
              >
                Vào ngay{' '}
                <i className="fa fa-arrow-circle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
