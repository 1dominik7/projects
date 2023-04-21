import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Products.scss'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState('desc')
  const [selectedSubCats, setSelectedSubCats] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [checked, setChecked] = useState(false);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item !== value))
  }

  const clearFiltersHandler = () => {
    window.location.reload();
  }

  return (
    <div className='products'>
      <div className='leftMobileContainer' >
        {!openFilter
        ?
        <div className="leftMobileFilters" onClick={() => setOpenFilter(!openFilter)}>
        <span>Filters</span>
        <KeyboardArrowDownIcon className='icon' />
        </div>
        :
          <div className="leftMobileFiltersAfter" >
          <div className="leftMobileAfter" onClick={() => setOpenFilter(!openFilter)}> 
            <span>Filters</span>
            <KeyboardArrowUpIcon className='icon' />
          </div>
      <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}> {item.attributes.title}</label>
            </div>
          ))}
            </div>
            <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
            </div>
            <button className='clearFilters' onClick={clearFiltersHandler}>Clear filters</button>
          </div>       
        }
        </div>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
         ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_960_720.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products
