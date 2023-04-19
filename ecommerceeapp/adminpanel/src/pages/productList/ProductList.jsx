import './productList.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

const ProductList = () => {
  const dispatch = useDispatch()
  const products= useSelector(state => state.product.products)

    useEffect(() => {
      getProducts(dispatch)
    }, [dispatch])
  
    const handleDelete = (id) => {
      deleteProduct(id, dispatch)
    }
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 260 },
        { field: 'product', headerName: 'Product', width: 220, renderCell: (params) =>{
          return (
            <div className='productListItem'>
              <img className='productListImg' src={params.row.img} alt=""/>
              {params.row.title}
            </div>
          )
        } },
        {
          field: 'inStock',
          headerName: 'Stock',
          width: 160
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 140
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="prodcutListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
              </>
            )
          }
        }
      ];
  return (
    <div className='productList'>
          <DataGrid
              rows={products}
              disableSelectionOnClick
              columns={columns}
              getRowId ={row => row._id}
              pageSize={8}
              checkboxSelection
          />
    </div>
  )
}

export default ProductList
