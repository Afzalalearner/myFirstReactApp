import React from 'react';
import axios from 'axios';
import ShouldRender from './../utils/ShouldRender'
import moment from 'moment'

const getUpdatedDate=(review)=>{
        
    // const dt=new Date(review.updatedDate).toLocaleDateString()
    // const time=new Date(review.updatedDate).toLocaleTimeString()

    // return `${dt} ${time}`
    return moment(review.updatedDate).fromNow()
}


const Reviews=({product})=>{

    return <div>
        <hr/>
        <h3>User reviews</h3>
        <hr/>
        <ShouldRender condition={product.reviews.length===0}>
            <div>Be the First one to Review</div>
            <button className='btn btn-sm btn-success'>Add Review </button>
        </ShouldRender>
    {product.reviews.map(review=><div>
<h4> <b>Subject: </b>{review.subject} </h4>
<b>Message: </b>{review.message}<br/>
<b>Rating: </b><b style={{textEmphasisColor:'#f00'}}>{review.rating}*</b>
<br/>{getUpdatedDate(review)}

<hr/>
</div>)}
        </div>
}
class ProductDetail extends React.Component {

    state = {
        product: {
            reviews:[]
        }
    }

  
    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/products/63a74ddc00220cf02f3985ce')
        this.setState({ product: res.data })
        console.log(res.data)


    }

    getDiscountedPrice({ product }) {
        return product.price - product.price * product.discount / 100;
    }

    render() {
        const { product } = this.state;
        return <div className='col-6'>
            <h1>{product.brand} {product.model}</h1>
            <div style={{ textDecoration: product.discount ? 'line-through' : '' }}>Was:${product.price}</div>
            <div>Now:{this.getDiscountedPrice({ product })}</div>
            <h1>Rating:{product.avgRating && product.avgRating.toFixed(2)}</h1>
            <div className='row'>
                <div className='col-3'>

                    <button disabled={!product.inStock} className="btn btn-primary btn-sm">Add to Cart
                        <i className='fa fa-sharp fa-cart-plus p-1'></i>
                    </button>
                </div>
                <div className='col-3'>

                    <button disabled={!product.inStock} className="btn btn-primary btn-sm">Buy Now

                    </button>
                </div>
                <br/>
                <div>
                    <Reviews product={product}/>
                    
                </div>
            </div>
        </div>


        // return <h1>{product.data.brand} {product.data.model}</h1>
    }
}

export default ProductDetail;