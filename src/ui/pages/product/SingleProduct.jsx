import React from "react";
import "./SingleProduct.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getProductImg } from "../../../utils/categories";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const SingleProduct = () => {
    const images = getProductImg();

    return (
        <div className="singleProduct_wrapper">
            <div className="singleProduct_section">
                <div className="singleProduct_left">
                    <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .10"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass=""
                    itemClass="carousel-item-padding-40-px"
                    partialVisbile={true}

                    >
                    {images.map((img) => {
                            return (
                                <div key={img.id}>
                                    <img src={img.img} alt={img.img} />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="singleProduct_right">
                    <h2>APPLE iPhone 14 (Blue, 128 GB)</h2>

                    <p>
                        128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP
                        | 12MP Front Camera A15 Bionic Chip, 6 Core Processor Processor
                    </p>

                    <strong>₹. 64,999</strong>

                    <div>
                        <button className="btn">ADD TO CART</button>
                        <button className="btn">BUY NOW </button>
                    </div>

                    <div className="product_offer">
                        <ul>
                            <li>Bank Offer5% Cashback on Shop India Axis Bank CardT&C</li>
                            <li>Bank Offer₹4000 Off On HDFC Bank Credit Card EMI Transactions</li>
                            <li>Bank Offer₹4000 Off On HDFC Bank Credit Card Non EMI Transactions</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
