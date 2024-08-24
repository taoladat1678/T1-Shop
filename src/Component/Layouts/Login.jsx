import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/font-awesome.min.css';
import '../../../public/css/nouislider.min.css';
import '../../../public/css/slick-theme.css';
import '../../../public/css/slick.css';
import './form.css'; // Nếu có các kiểu CSS đặc biệt cho trang đăng nhập

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
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
  
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Đã xảy ra lỗi');
      }
  
      // Lưu token và thông tin người dùng vào localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
      localStorage.setItem('fullName', data.fullName);
      localStorage.setItem('isAdmin', data.isAdmin);
  
      toast.success('Đăng nhập thành công!');
      setError('');
  
      // Reset form data
      setFormData({
        email: '',
        password: '',
      });
  
      // Chuyển hướng đến trang chủ và reload
      navigate('/');
      window.location.reload();
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };
  
  return (
    <div className="section" id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="login-form">
              <h2>Đăng Nhập</h2>
              <form onSubmit={handleSubmit}>
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
                <button className="btn reg-button" type="submit">
                  Đăng nhập
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
