import React from 'react'
import Category from './categories/Category'
import HomeCarousel from './carousel/Carousel'
import Products from './products/Products'
import SingleProduct from '../pages/product/SingleProduct'

const Home = () => {
  return (
    <div>
        <Category />
        <HomeCarousel />
        <Products />
        <SingleProduct />
    </div>
  )
}

export default Home