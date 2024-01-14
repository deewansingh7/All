import React, { startTransition, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, loadProducts } from '../../redux/slices/productSlice';
import { CiHospital1 } from 'react-icons/ci';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


function ProductList() {
    // const selector = useSelector();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productReducer);
    const status = useSelector(state => state.productReducer.status);
    // async function getData() {
    //     const respose = await fetch('https://api.escuelajs.co/api/v1/products');
    //     const data = await respose.json();
    //     dispatch(loadProducts(data));
    // }
    useEffect(() => {
        // getData();
        dispatch(fetchData());
    }, [])

    if (status === 'loading') {
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return <Spin style={{ position: 'absolute', top: '40%', left: '50%' }} indicator={antIcon} />
    }

    if (status === 'failed') {
        return <h2 style={{ position: 'absolute', top: '40%', left: '40%' }}>Something went wrong!!!</h2>
    }
    return (
        <div className='ProductList'>{products.map(x => <SingleProduct key={x.id} product={x} />)}
        </div>
    )
}

export default ProductList;