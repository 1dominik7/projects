import './userList.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
  setData(data.filter(item => item.id !== id))
  }
  
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 160, renderCell: (params) =>{
    return (
      <div className='userListUser'>
        <img className='userListImg' src={params.row.avatar} alt=""/>
        {params.row.username}
      </div>
    )
  } },
  {
    field: 'email',
    headerName: 'Email',
    width: 250
  },
  {
    field: 'status',
    eaderName: 'Status',
    width: 140
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 180
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      )
    }
  }
];
  return (
    <div className='userList'>
           <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
    </div>
  )
}

export default UserList