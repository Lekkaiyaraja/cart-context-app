import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './App.css';

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);

    const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = state.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shippingCost = totalQuantity > 0 ? 10 : 0; // Example fixed shipping cost
    const finalAmount = totalAmount + shippingCost;

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <ul className="cart-list">
                {state.items.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2 className="cart-item-title">{item.title}</h2>
                            <p className="cart-item-description">{item.description}</p>
                            <p className="cart-item-category"><strong>Category:</strong> {item.category}</p>
                            <p className="cart-item-rating"><strong>Rating:</strong> {item.rating.rate} ({item.rating.count} reviews)</p>
                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                            <div className="cart-item-quantity">
                                <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}>+</button>
                            </div>
                            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })} className="cart-item-remove">Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <span className="cart-summary-label">Total Quantity:</span>
                    <span className="cart-summary-value">{totalQuantity}</span>
                </div>
                <div className="cart-summary-row">
                    <span className="cart-summary-label">Subtotal:</span>
                    <span className="cart-summary-value">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                    <span className="cart-summary-label">Shipping Cost:</span>
                    <span className="cart-summary-value">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="cart-summary-row">
                    <span className="cart-summary-label">Total Amount:</span>
                    <span className="cart-summary-value">${finalAmount.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
