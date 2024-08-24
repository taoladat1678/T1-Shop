// actions/authActions.js
export const logout = () => (dispatch) => {
    // Xóa dữ liệu người dùng từ local storage hoặc trạng thái
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };
  