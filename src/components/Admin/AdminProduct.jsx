import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import productApi from '~/api/productApi';

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
        <div>
            
        </div>
    );
}

export default AdminProduct;