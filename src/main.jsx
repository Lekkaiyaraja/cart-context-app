import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { CartProvider } from './CartContext';
import './App.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Use createRoot instead of ReactDOM.render

root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
