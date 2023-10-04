import img1 from '../assets/categories/Grocery.webp'
import img2 from '../assets/categories/appliance.webp'
import img3 from '../assets/categories/mobile.webp'
import img4 from '../assets/categories/furniture.webp'
import img5 from '../assets/categories/electronics.webp'
import img6 from '../assets/categories/fashion.webp'


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
];

export const getCategories = () => {
    return category
}
