import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ categories, filters, sort }) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(categories
          ? `http://localhost:5000/api/products?category=${categories}`
          : "http://localhost:5000/api/products"
        )
        setProducts(res.data)
      } catch (err) {
        
      }
    }
    getProducts()
  }, [categories])
  
  useEffect(() => {
    categories &&
      setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key,value]) => item[key].includes(value)))
    )
  },[products, categories, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
      //[...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      //or sort((a,b) => a.createdAt.localeCompare(b.createdAt) )
    } else if (sort === "asc") {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <Container>
          {categories ? filteredProducts.map(item => (
              <Product item={item} key={item.id} />
          )) : products.slice(0, 8)
        .map(item => (
          <Product item={item} key={item.id} />
    ))}
    </Container>
  )
}

export default Products
