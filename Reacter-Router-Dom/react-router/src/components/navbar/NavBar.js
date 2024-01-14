import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import './NavBar.css';
import { useSelector } from 'react-redux';

function NavBar() {

    const cartItem = useSelector(state => state.cartReducer.cart);
    let count = 0;
    cartItem.forEach((item) => count += item.quantity);
    return (
        <nav>
            <div className="banner">My Myntra</div>
            <div className="right-layout">
                <div className="cart-layout">
                    <CiShoppingCart />
                    <h5>{count}</h5>
                </div>
            </div>
        </nav>
    )
}

export default NavBar