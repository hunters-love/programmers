import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (let amount of cart) {
        total = total + amount.bookPrice;

    }
    return (
        <div className="cart-area">
            <i className="fas fa-user-plus font-size"></i>{props.cart.length}
            <br />
            <h5>Total price:{total}</h5>
        </div>
    );
};

export default Cart;