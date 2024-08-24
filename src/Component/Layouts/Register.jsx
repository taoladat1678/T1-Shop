import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; // Nếu có các kiểu CSS đặc biệt cho trang đăng ký
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/font-awesome.min.css';
import '../../../public/css/nouislider.min.css';
import '../../../public/css/slick-theme.css';
import '../../../public/css/slick.css';
import './form.css'; // Nếu có các kiểu CSS đặc biệt cho trang đăng ký

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); // Hook điều hướng

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Mật khẩu và xác nhận mật khẩu không khớp');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Đã xảy ra lỗi');
      }

      toast.success(data.message);
      // Reset form data
      setFormData({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // Chuyển hướng đến trang đăng nhập
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="section" id="registration">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="registration-form">
              <h2>Đăng Ký</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Họ và tên:</label>
                  <input
                    className="form-control"
                    id="fullname"
                    placeholder="Nhập họ và tên"
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    id="email"
                    placeholder="Nhập email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu:</label>
                  <input
                    className="form-control"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
                  <input
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="btn reg-button"
                  type="submit"
                >
                  Đăng ký
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
