import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'



const Categories = () => {
  return (
    <div className='categories'>
          <div className="col">
              <div className="row">
                  <img src="https://cdn.pixabay.com/photo/2018/01/01/14/26/one-3054268_960_720.jpg" alt="" />
                  <button>
                      <Link className="link" to="/products/6">
                          Sale
                      </Link>
                  </button>
              </div>
              <div className="row">
                  <img src="https://cdn.pixabay.com/photo/2021/03/14/10/13/girl-6093779_960_720.jpg" alt="" />
                  <button>
                      <Link className="link" to="/products/2">
                          Woman
                      </Link>
                  </button>
              </div>
      </div>
          <div className="col">
              <div className="row">
                  <img src="https://cdn.pixabay.com/photo/2023/02/08/07/32/vietnamese-woman-7775904_960_720.jpg" alt="" />
                  <button>
                      <Link className="link" to="/products/3">
                          New Season
                      </Link>
                  </button>
              </div>
      </div>
          <div className="col col-l">
              <div className="row">
                  <div className="col">
                      <div className="row">
                          <img src="https://cdn.pixabay.com/photo/2021/02/21/12/39/but-model-6036247_960_720.jpg" alt="" />
                  <button>
                      <Link className="link" to="/products/1">
                          Men
                      </Link>
                          </button>
                      </div>
                  </div>
                  <div className="col">
                      <div className="row">
                          <img src="https://cdn.pixabay.com/photo/2017/08/02/12/44/accessories-2571416_960_720.jpg" alt="" />
                  <button>
                              <Link className="link" to="/products/5">
                          Accessories
                      </Link>
                          </button>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <img src="https://cdn.pixabay.com/photo/2020/08/24/21/40/fashion-5515135_960_720.jpg" alt="" />
                  <button>
                      <Link className="link" to="/products/4">
                          Shoes
                      </Link>
                  </button>
              </div>
      </div>
    </div>
  )
}

export default Categories
