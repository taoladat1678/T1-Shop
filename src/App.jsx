import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // Đảm bảo sử dụng React 18 API

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Component/Layouts/Header';
import Navigation from './Component/Layouts/Navigation';
import Banner from './Component/Layouts/Banner';
import HotDeals from './Component/Layouts/HotDeals';
import NewProducts from './Component/Layouts/NewProducts';
import DetailProduct from './Component/Layouts/DetailProduct';
import Footer from './Component/Layouts/Footer';
import Cart from './Component/Layouts/Cart'; // Import Cart component
import store from './Component/Layouts/Store';
import Register from './Component/Layouts/Register';
import Login from './Component/Layouts/Login';
import ProductSearch from './Component/Layouts/ProductSearch';

import '../public/css/bootstrap.min.css';
import '../public/css/font-awesome.min.css';
import '../public/css/nouislider.min.css';
import '../public/css/slick-theme.css';
import '../public/css/slick.css';
import './App.css';

function Home({ currentCategory }) {
  return (
    <>
      <Banner />
      <NewProducts currentCategory={currentCategory} />
      <HotDeals />
    </>
  );
}

Home.propTypes = {
  currentCategory: PropTypes.number,
};

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [user, setUser] = useState({
    fullName: localStorage.getItem('fullName'),
  });

  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header
            onCategoryChange={handleCategoryChange}
            user={user}
            setUser={setUser} // Truyền setUser cho Header
          />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home currentCategory={currentCategory} />} />
            <Route path="/search/:keyword" element={<ProductSearch />} />
            <Route path="/new-products" element={<NewProducts currentCategory={currentCategory} />} />
            <Route path="/hot-deals" element={<HotDeals />} />
            <Route path="/product/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} /> {/* Trang chính */}
          </Routes>
          <Footer />
         
        </div>
      </Router>
    </Provider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
