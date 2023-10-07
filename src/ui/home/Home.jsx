import React from 'react'
import Category from './categories/Category'
import HomeCarousel from './carousel/Carousel'
import Products from './products/Products'
import SingleProduct from '../pages/product/SingleProduct'
import Cart from '../pages/cart/Cart'

const Home = () => {
  return (
    <div>
        <Category />
        <HomeCarousel />
        <Products />
        <Products />
        <Products />
        <SingleProduct />
        <Cart />
    </div>
  )
}

export default Home