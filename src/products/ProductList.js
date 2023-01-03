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
    
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const [search,setSearch]=useState('');
    const [filter,setFilter]=useState('');

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
        axios.get(`http://localhost:5000/api/products/page/${page}/limit/${limit}?search=${filter}`)
            .then(res => {
                setResponse(res.data)
                setError(false)
                setLoader(false)
            })
            .catch(err => {

                setError(true)
                setLoader(false)
            })

    }, [page, limit,filter])

    const onPrev = () => {
        if (page > 1)
            setPage(page - 1)
    }
    const onNext = () => {
        if (page < response.metadata.pages) {
            setPage(page + 1)
        }

    }

    const onLimitChange = (evt) => {

        setLimit(evt.target.value)
        setPage(1)
    }

    const onSearchChange=(evt)=>{
        if(evt.target.value===''){
            setFilter(evt.target.value)
            setPage(1)
        }else{
            setSearch(evt.target.value)
            setPage(1)
        }
    }

    const onSearch=()=>{
        setFilter(search)
    }

    // render(){
    return <div className='container-fluid'>
        <h4 style={{ textAlign: 'center' }} className="m-3">Products</h4>
        <hr />

        <ShouldRender condition={hasError}>
            <Error />
        </ShouldRender>

        <ShouldRender condition={loader}>
            <Loader />
        </ShouldRender>
        <div className='row'>

            <div className='col-1'>
                <button disabled={page === 1} className='btn btn-outline-secondary' onClick={onPrev}>
                    <i className='fa-solid fa-chevron-left'></i>
                </button>
            </div>
            <div className='col-3 p-2'>
                <b>
                    Page {page} of {response.metadata.pages} (total {response.metadata.count} Records)
                </b>
            </div>
            <div className='col-1'>
                <button className='btn btn-outline-secondary' disabled={page === response.metadata.pages} onClick={onNext}>
                    <i className='fa-solid fa-chevron-right'></i>
                </button>
            </div>

            <div className='col-2'>
                <input type="text" onChange={onSearchChange} placeholder='Search' className='form-control' />
            </div>

            <div className='col-1 p-1'>
                <button className='btn btn-sm btn-outline-primary' onClick={onSearch}>
                    <i className='fa-solid fa-search'></i>
                </button>
            </div>

            <div className='col-1'>
                <select className='form-select' onChange={onLimitChange}>
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>

                </select>
            </div>
            <div className='col-2'>
                <Link to="/products/new" className="btn btn-danger btn-sm p-2">Add Product</Link>
            </div>

        </div>
        {response.data.map(product => <ProductItem key={product._id} product={product} />)}
    </div>;
}
// }

export default ProductList
