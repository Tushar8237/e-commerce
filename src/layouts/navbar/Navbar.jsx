import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faUser,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="wrapper">
            <div className="section">
                <img src={logo} alt="Shop India" />
                <div className="nav_search">
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                    <input
                        type="text"
                        title="Search bar"
                        placeholder="Search for Products, Brands and More"
                    />
                </div>
                <a href="/sign-in">
                    <FontAwesomeIcon icon={faUser} className="icons" />
                    Sign in
                </a>
                <a href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                    Cart
                </a>
            </div>

            <div className="mobile_Section">
                <div>
                    <img src={logo} alt="Shop India" />

                    <a href="/sign-in">
                        <FontAwesomeIcon icon={faUser} className="icons" />
                        Sign in
                    </a>
                    <a href="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                        Cart
                    </a>
                </div>

                <div className="nav_search">
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                    <input
                        type="text"
                        title="Search bar"
                        placeholder="Search for Products, Brands and More"
                    />
                </div>
            </div>   
        </div>
    );
};

export default Navbar;
