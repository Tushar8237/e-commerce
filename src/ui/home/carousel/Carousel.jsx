import React from "react";
import "./Carousel.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getCarouselImg } from "../../../utils/categories";

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




const HomeCarousel = () => {

    const images = getCarouselImg()


    
    return (
        <div className="carousel_wrapper">
            <div className="carousel_section">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .10"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass=""
                    itemClass="carousel-item-padding-40-px"
                    partialVisbile={true}
                >

                    {
                        images.map((img) => {
                            return (
                                <div key={img.id} className="carousel_img">
                                    <img src={img.img} alt={img.img} />
                                </div>
                            )
                        })
                    }
                </Carousel>
                
            </div>
        </div>
    );
};

export default HomeCarousel;
