import React from 'react'
import Category from '../categories/Category'
import HomeCarousel from '../carousel/Carousel'
import Products from '../products/Products'

const Home = () => {
  return (
    <div>
        <Category />
        <HomeCarousel />
        <Products />
    </div>
  )
}

export default Home