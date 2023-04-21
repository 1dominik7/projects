import React, { useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
  )
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === data.map(item=>item.id) ? data.map(item=>item.id) : prev => prev - 1)
}
const nextSlide = () => {
    setCurrentSlide(currentSlide === data.map(item=>item.id) ? data.map(item=>item.id) : prev => prev + 1)
}
 
  return (
    <div className='featuredProducts'  >
          <div className="top">
              <h1>{type} products</h1>
              <p>The latest trends in the fashion world</p>
      </div>
          <div className="bottom" >
              {error 
                ? "Something went wrong!"
                : loading ?
                "loading"
                : data?.map(item => (
                  <Card item={item} key={item.id} />
                ))}    
      </div>    
    </div>
  )
}

export default FeaturedProducts
