import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
    const location = useLocation();
    const product = location.state?.product || {};
    return (
        <div className="order-page">
            <div className="order-content">
                <img src={product.url} alt={product.name} className="order-image"/>
                <div className="order-details">
                    <h1>Order {product.name || 'Product'}</h1>
                    <p className="price">{product.price || 'Price on request'}</p>
                    <form className="order-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" required />
                        </div>
                        <div className="form-group">
                            <label>Delivery Address</label>
                            <textarea required></textarea>
                        </div>
                        <button type="submit" className="submit-order">Complete Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;