import React, { useEffect, useState } from 'react'
import './SearchCart.scss'
import { Link  } from 'react-router-dom'
import axios from 'axios'

const SearchCart = () => {

    const [data, setData] = useState([])
    const [query, setQuery]= useState("")
    
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(`http://localhost:1337/api/products?populate=*`
            )
            setData(res.data.data)
          } catch (err) {
            console.log(err)
          } 
        }
        getProducts()
      },[])

  return (
    <div className='searchCartContainer'>
      <input className="searchInput" type="text" placeholder="Search for item" onChange={e => setQuery(e.target.value)} />
          <div className="foundProducts">
        {data.filter(item => item.attributes.title.toLowerCase().includes(query)).map(item => (
                <Link className='foundLink' to={`/product/${item.id}`}>
                <div className="foundProduct" key={item.id} >
                     <div className="foundtitle">{item.attributes.title}</div>       
                <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img1.data.attributes.formats.small.url} />
            </div>
            </Link>
                       ))}  
              </div>
    </div>
  )
}

export default SearchCart
