import img1 from '../assets/categories/Grocery.webp'
import img2 from '../assets/categories/appliance.webp'
import img3 from '../assets/categories/mobile.webp'
import img4 from '../assets/categories/furniture.webp'
import img5 from '../assets/categories/electronics.webp'
import img6 from '../assets/categories/fashion.webp'
import img7 from '../assets/categories/travel.webp'
import img16 from '../assets/categories/toy.webp'



//  carousel img

import img8 from '../assets/carousel-img/img1.webp'
import img9 from '../assets/carousel-img/img2.webp'
import img10 from '../assets/carousel-img/img3.webp'
import img11 from '../assets/carousel-img/img4.webp'
import img12 from '../assets/carousel-img/img5.webp'
import img13 from '../assets/carousel-img/img6.webp'
import img14 from '../assets/carousel-img/img7.webp'
import img15 from '../assets/carousel-img/img8.webp'

// product img 

// import img17 from "../assets/product-img/img1.webp"
// import img18 from "../assets/product-img/img2.webp"
// import img19 from "../assets/product-img/img3.webp"
// import img20 from "../assets/product-img/img4.webp"
// import img21 from "../assets/product-img/img5.webp"

import img17 from "../assets/product-img/iphone1.webp"
import img18 from "../assets/product-img/iphone2.webp"
import img19 from "../assets/product-img/iphone3.webp"
import img20 from "../assets/product-img/iphone4.webp"
import img21 from "../assets/product-img/iphone5.webp"
import img22 from "../assets/product-img/iphone6.webp"






const category = [
    {
        id: 1,
        categoryImg: img1,
        title: "Grocery",
    },
    {
        id: 2,
        categoryImg: img3,
        title: "Mobiles",
    },
    {
        id: 3,
        categoryImg: img6,
        title: "Fashion",
    },
    {
        id: 4,
        categoryImg: img5,
        title: "Electronics",
    },
    {
        id: 5,
        categoryImg: img4,
        title: "Furniture",
    },
    {
        id: 6,
        categoryImg: img2,
        title: "Appliance",
    },
    {
        id: 7,
        categoryImg: img7,
        title: "Travel",
    },
    {
        id: 8,
        categoryImg: img16,
        title: "Toys",
    },
];

const carouselImg = [
    {
        id : 1,
        img : img8
    },
    {
        id : 2,
        img : img9
    },
    {
        id : 3,
        img : img10
    },
    {
        id : 4,
        img : img11
    },
    {
        id : 5,
        img : img12
    },
    {
        id : 6,
        img : img13
    },
    {
        id : 7,
        img : img14
    },
    {
        id : 8,
        img : img15
    },
]

const productImg = [
    {
        id : 1,
        img : img17,
    },
    {
        id : 2,
        img : img18,
    },
    {
        id : 3,
        img : img19,
    },
    {
        id : 4,
        img : img20,
    },
    {
        id : 5,
        img : img21,
    },
    {
        id : 5,
        img : img22,
    },
]

export const getCategories = () => {
    return category
}

export const getCarouselImg = () => {
    return carouselImg
}

export const getProductImg = () => {
    return productImg
}
