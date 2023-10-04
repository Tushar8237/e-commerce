import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faUser,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="wrapper">
            <div className="section">
                <Link to="/">
                    <img src={logo} alt="Shop India" />
                </Link>
                <div className="nav_search">
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                    <input
                        type="text"
                        title="Search bar"
                        placeholder="Search for Products, Brands and More"
                    />
                </div>

                <div className="navCart">
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} className="icons" />
                        Sign in
                    </Link>

                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                        Cart
                    </Link>
                </div>
            </div>

            <div className="mobile_Section">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Shop India" />
                    </Link>

                    <Link to="/login" className="navMobile_link">
                        <FontAwesomeIcon icon={faUser} className="icons" />
                        Sign in
                    </Link>

                    <Link to="/cart" className="navMobile_link">
                        <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                        Cart
                    </Link>
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
