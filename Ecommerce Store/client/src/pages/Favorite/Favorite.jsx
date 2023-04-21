import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Favorite.scss'
import { removeItemFav } from '../../redux/favReducer'
import { userData } from '../../redux/store'


const Favorite = () => {

    const favProducts = useSelector(state => state.favorite.favProducts)
    const dispatch = useDispatch()
    const {username} = userData()
   
  return (
    <div className='favorite'>
      {username  ? (
        <div className="favWrapper" >
          {favProducts.map(item => (
            <div className='favInfo' key={item.id}>
              <span className='favTitle'>Title: {item.title.substring(0, 30)} </span>
              <span className='favPrice'>Price: ${item.price} </span>
              <a href={`/product/${item.id}`}><img src={process.env.REACT_APP_UPLOAD_URL + item.img1} /></a>
              <DeleteOutlinedIcon className="favDelete" onClick={() => dispatch(removeItemFav(item.id))} />
            </div>
          ))}
        </div>
      ) : ''}
    </div >          
  )
}

export default Favorite
