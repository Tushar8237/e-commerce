import React from "react";
import "./Cart.scss";
import productImg from "../../../assets/product-img/iphone1.webp";

const Cart = () => {
    return (
        <div className="cart_wrapper">
            <div className="cart_section">
                <div className="cartLeft_wrapper">
                    <div className="cart_left">
                        <div className="cartProduct_img">
                            <img src={productImg} alt="product" />
                        </div>
                        <div className="cartProduct_details">
                            <h2>APPLE iPhone 14 (Blue, 128 GB)</h2>
                            <p>
                                128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP +
                                12MP | 12MP Front Camera
                            </p>
                            <strong>₹. 64,999</strong>
                            <div className="cartProduct_quantity">
                                <button id="cartProduct_btn" className="cartProduct_btn">
                                    -
                                </button>
                                <span>0</span>
                                <button className="cartProduct_btn">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart_left">
                        <div className="cartProduct_img">
                            <img src={productImg} alt="product" />
                        </div>
                        <div className="cartProduct_details">
                            <h2>APPLE iPhone 14 (Blue, 128 GB)</h2>
                            <p>
                                128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP +
                                12MP | 12MP Front Camera
                            </p>
                            <strong>₹. 64,999</strong>
                            <div className="cartProduct_quantity">
                                <button id="cartProduct_btn" className="cartProduct_btn">
                                    -
                                </button>
                                <span>0</span>
                                <button className="cartProduct_btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_right">
                    <div>
                        <p>Price (2 Items)</p>
                        <p>₹85,899</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>-₹20,401</p>
                    </div>
                    <div>
                        <p>Delivery Charges</p>
                        <p>-₹80 Free</p>
                    </div>
                    <div>
                        <p>Pickup Charges</p>
                        <p>₹199 Free</p>
                    </div>
                    <div>
                        <h2>Total Amount</h2>
                        <strong>₹55,695</strong>
                    </div>

                    <div className="cartPlace_order">
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
