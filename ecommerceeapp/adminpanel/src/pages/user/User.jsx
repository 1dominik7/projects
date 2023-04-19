import './user.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
          <div className="userTitleContainer">
              <h1 className='userTitle'>Edit User</h1>
              <Link to="/newUser">
                  <button className="userAddButton">Create</button></Link>
          </div>
          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      <img src="https://cdn.pixabay.com/photo/2018/03/21/16/50/woman-3247382_960_720.jpg" alt="" className="userShowImg" />
                      <div className="userShowTopTitle">
                          <span className="userShowUsername">Anna Becker</span>
                          <span className="userShowUserTitle">Software Engineer</span>
                      </div>
                  </div>
                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                      <PermIdentity className='userShowIcon'/>
                      <span className="userShowInfoTitle">annabeck99</span>
                      </div>
                      <div className="userShowInfo">
                      <CalendarToday className='userShowIcon'/>
                      <span className="userShowInfoTitle">10.12.1999</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                      <PhoneAndroid className='userShowIcon'/>
                      <span className="userShowInfoTitle">+1 234 567 89</span>
                      </div>
                      <div className="userShowInfo">
                      <MailOutline className='userShowIcon'/>
                      <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                      </div>
                      <div className="userShowInfo">
                      <LocationSearching className='userShowIcon'/>
                      <span className="userShowInfoTitle">New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" placeholder="annabeck99" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder="Anna Beck" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" placeholder="annabeck99@gmail.com" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" placeholder="+1 234 567 89" className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder="New York | USA" className='userUpdateInput' />
                      </div>
                  </div>
                  <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img className='userUpdateImg' src="https://cdn.pixabay.com/photo/2018/03/21/16/50/woman-3247382_960_720.jpg" alt="" />
                              <label htmlFor="file">
                                  <Publish className="userUpdateIcon"/>
                              </label>
                              <input type="file" id="file" style={{display:"none"}} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
                  </div>
          </div>
    </div>  
  )
}

export default User
