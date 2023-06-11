import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '~/api/productApi';
import EditProduct from './AdminProduct/EditProduct';

AdminProduct.propTypes = {
    
};

function AdminProduct(props) {
    const dispatch = useDispatch();
    const { products } = useSelector(product => product.user);
    console.log(products)

    useEffect(()=>{
        dispatch(productApi.getAll())
    },[])
    return (
        <div  className='grow'>
           <EditProduct />
        </div>
    );
}

export default AdminProduct;