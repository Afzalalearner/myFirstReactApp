//Presentation Component
const Product=({product})=>{

  const getDiscountedPrice=()=>{
    return product.price-product.price*product.discount/100
  }
  return <div className="col-md-3 m-2 offset-md-1">

   <div className="card ">
      <img src={product.image} className="card-img-top" style={{backgroundColor:"#def"}} alt=""/>
  <div className="card-header">
        {product.brand} {product.model}
  </div>
    <div className="card-body">
      <div className="card-title">
    <b style={{textDecoration:product.discount?'line-through':''}}>Was:{product.price}</b>
    <br/>
    <b>Is:{getDiscountedPrice()}</b>
      </div>
    </div>
    <div className="card-footer">
      <button style={{color:'white'}}
      className="btn btn-primary btn-sm" disabled={!product.inStock}>Add to Cart
      <i className="p-1 fa-sharp fa-solid fa-cart-plus"></i>
      </button>
    </div>
    </div>
    <hr/>
  </div>





    // return <div>
    //     <h3>{product.brand} {product.model}</h3>
    //    <br/>
    //    <img src={product.image} alt=""/>
    //    <br/>
    //     <b style={{textDecoration:product.discount?'line-through':''}}>Was:{product.price}</b>
    //     <br/>
    //     <b>Is:{product.price-product.price*product.discount/100}</b>
    //     <br/>
    //     <button className="btn btn-success btn-sm" disabled={!product.inStock}>Add to Cart</button>
    //     <hr/>
    // </div>
    }
    export default Product;