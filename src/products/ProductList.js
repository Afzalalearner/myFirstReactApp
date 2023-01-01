import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ShouldRender from './../utils/ShouldRender'
import Error from './../utils/Error'
import Loader from './../utils/Loader'
import { Link } from 'react-router-dom';

// class ProductList extends React.Component{

const ProductList = () => {
    const [response, setResponse] = useState({
        metadata: {},
        data: []
    })

    const [hasError, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    // state={
    //     response:{
    //         metadata:{},
    //         data:[]
    //     },
    //     hasError:false,
    //     loader:true
    // }

    // constructor(){
    //     super()
    //     axios.get('http://localhost:5000/api/products/page/1/limit/10')
    //         .then(res => {
    //             this.setState({ response: res.data, hasError: false, loader: false })
    //             console.log(res.data)
    //         })
    //         .catch(err => this.setState({ hasError: true, loader: false }))
    // }
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/page/1/limit/10')
            .then(res => {
                setResponse(res.data)
                setError(false)
                setLoader(false)
            })
            .catch(err => {

                setError(true)
                setLoader(false)
            })

    }, [])

    // render(){
    return <div className='container-fluid'>
        <h4 style={{ textAlign: 'center' }} className="m-3">Products</h4>
        <hr />
        <Link to="/products/new" className="btn btn-danger btn-sm">Add Product</Link>

        <ShouldRender condition={hasError}>
            <Error />
        </ShouldRender>

        <ShouldRender condition={loader}>
            <Loader />
        </ShouldRender>


        {response.data.map(product => <ProductItem product={product} />)}
    </div>;
}
// }

export default ProductList
