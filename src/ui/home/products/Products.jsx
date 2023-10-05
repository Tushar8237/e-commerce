import React from 'react'
import './Products.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import mobile from '../../../assets/categories/mobile.webp'
import electronics from '../../../assets/categories/electronics.webp'
import appliance from '../../../assets/categories/appliance.webp'
import furniture from '../../../assets/categories/furniture.webp'
import travel from '../../../assets/categories/travel.webp'



const Products = () => {
  return (
    <div className="product_wrapper">
        <div className="product_section">
            <h2>Trending Products <span className="product_arrow"><FontAwesomeIcon icon={faArrowRight}  /></span></h2>

            <div className="productCard_wrapper">
                <div className="product_card">
                    <img src={furniture} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={electronics} alt="mobile" />
                    <h3>Asus Laptop</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={appliance} alt="mobile" />
                    <h3>Washing Machine</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={travel} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={mobile} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={mobile} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={mobile} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
                <div className="product_card">
                    <img src={mobile} alt="mobile" />
                    <h3>Apple iPhone 15</h3>
                    <strong>₹ 1,10,000</strong>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products