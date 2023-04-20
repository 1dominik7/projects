import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Favorite from '@mui/icons-material/Favorite';
import useFetch from '../../hooks/useFetch';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { userData } from '../../redux/store';
import { Button } from '@mui/material';
import { addToFav } from '../../redux/favReducer';

const Product = () => {

  const {username} = userData()
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState('img1')
  const [quantity, setQuantity] = useState(1)
  const [openDesc, setOpenDesc] = useState(false)
  const [size, setSize] = useState("")
  const [openAdd, setOpenAdd] = useState(false)
  const [openFaq, setOpenFaq] = useState(false)
  const navigate = useNavigate();
  const favProducts = useSelector(state => state.favorite.favProducts)
  const [changeWishList, SetChangeWishList] = useState(!favProducts)

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  
  return (
    <div className="product">
      {loading
        ?
        "loading"
        :
        (<><div className="left">
        <div className="images">
          <img
            src={
            process.env.REACT_APP_UPLOAD_URL +
            data?.attributes?.img1?.data?.attributes?.url
          }
            alt=""
            onClick={e => setSelectedImg("img1")} />
          <img
            src={
            process.env.REACT_APP_UPLOAD_URL +
            data?.attributes?.img2?.data?.attributes?.url
          }
            alt=""
            onClick={e => setSelectedImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src=
            {
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="right">
          <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
          <p>{data?.attributes?.desc}</p>
            <span className='sizeInfo'>Size:</span>
          <select className="size" onChange={(e) => setSize( e.target.value )}>
            {data?.attributes?.sizes?.data?.map(item => (
              <option key={item.attributes.id}>{item.attributes.title}</option>
            ))}
          </select>
        <div className="quantity">
          <button onClick={() => setQuantity(prev=>prev === 1 ? 1: prev -1)}>-</button>
            {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
          </div>
            {username
              ?
              (<>
            <button className='add' onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img1: data.attributes.img1.data.attributes.url,
              quantity,
              size: size || data.attributes.sizes.data[0].attributes.title}))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
              </>)
              :
            <Button className='add' component={Link} to='/login' ><AddShoppingCartIcon />ADD TO CART</Button>
            }
          <div className="links">
              {username
                ?
                (<>
                  {!changeWishList
                    ?
                    (
                <div className="item" onClick={() => (SetChangeWishList(!changeWishList), (dispatch(addToFav({
                  id: data.id,
                  title: data.attributes.title,
                  price: data.attributes.price,
                  img1: data.attributes.img1.data.attributes.url,
                }))))}>
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>)
                    :
                    (
                  <div className="itemActive" onClick={() => (
                    navigate('/favorite')
                  )}>
                    <FavoriteIcon className='iconActive'/> ADD TO WISH LIST
                  </div>
                )}
                </>)
                :
              <><Favorite className='iconActive' /> ADD TO WISH LIST</>
               }
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
            <span> Product Type: {data?.attributes?.sub_categories?.data?.map(item => item.attributes.title)}  </span> 
          <span>Tag: {data?.attributes?.categories?.data?.map(item => item.attributes.title + " ,")}</span>
        </div>
        <hr />
          <div className="info">
              {!openDesc
                ?
            <div className='openInfo' onClick={() => setOpenDesc(!openDesc)}>DESCRIPTION
              </div>
              :
              <div className='openInfoAfter' onClick={() => setOpenDesc(!openDesc)}>DESCRIPTION
              {openDesc && <><div>{data.attributes.title}</div></>}
            </div>
            }
            <hr />
              {!openAdd
                ?
              <div className='openInfo' onClick={() => setOpenAdd(!openAdd)}>ADDITIONAL INFORMATION
              </div>
              : 
              <div className='openInfoAfter' onClick={() => setOpenAdd(!openAdd)}>ADDITIONAL INFORMATION
              {openAdd && <><div>{data.attributes.desc}</div></>}
            </div> 
            }
            <hr />
            {
                !openFaq
                  ?
              <div className='openInfo' onClick={() => setOpenFaq(!openFaq)}>FAQ</div>
            :
            <div className='openInfoAfter' onClick={() => setOpenFaq(!openFaq)}>FAQ
              {openFaq && <><div>Our shipping partners DHL, Hermes and GLS offer you contactless delivery. You always receive a notification when your parcel is ready to be delivered. You can then choose a preferred delivery location, e.g. on your doorstep.
              In addition to this, there are also other delivery options available. You can for example change the date of delivery if you won't be home on the expected delivery day.</div></>}
              </div>
              }
        </div>
          </div>
        </>)}
    </div>
  )
}

export default Product
