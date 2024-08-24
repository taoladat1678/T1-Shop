import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from './CartSlice';
import './style.css';
import '../../../public/css/bootstrap.min.css';
import '../../../public/css/font-awesome.min.css';
import '../../../public/css/nouislider.min.css';
import '../../../public/css/slick-theme.css';
import '../../../public/css/slick.css';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemove = (id) => {
    setItemToRemove(id);
    setShowModal(true);
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      dispatch(removeFromCart(itemToRemove));
      setShowModal(false);
      setItemToRemove(null);
      toast.success("Mặt hàng đã được xóa khỏi giỏ hàng.");
    }
  };

  const cancelRemove = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      {/* CART TABLE */}
      <div className="container" id="cart-container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Ảnh sản phẩm</th>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={`/img/${item.img}`}  // Cập nhật lại đường dẫn ảnh
                        alt={item.name}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString()} VND</td>
                    <td>
                      <div className="quantity-control">
                        <button className="btn btn-secondary btn-sm" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button className="btn btn-secondary btn-sm" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                      </div>
                    </td>
                    <td>{(item.quantity * item.price).toLocaleString()} VND</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right">
              <h3>Tổng cộng: {(calculateTotal()).toLocaleString()} VND</h3>
              <button className="btn btn-primary">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
      {/* /CART TABLE */}

      {/* CONFIRMATION MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Xác nhận</h4>
            <p>Bạn có muốn xóa mặt hàng này khỏi giỏ hàng?</p>
            <button className="btn btn-secondary" onClick={cancelRemove}>Hủy</button>
            <button className="btn btn-danger" onClick={confirmRemove}>Xóa</button>
          </div>
        </div>
      )}

      {/* ToastContainer for React Toastify */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
