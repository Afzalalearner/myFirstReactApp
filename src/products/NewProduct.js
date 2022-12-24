import React, { Component } from "react";
import axios from "axios";
import ShouldRender from "../utils/ShouldRender";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
class NewProduct extends Component {
    state = {
        product:{
            brand: '',
            model: '',
            price: '',
            discount: '',
            inStock: false,
        },
        success: false,
        hasError: false,
        loader: false
    }
    onControlChange = (evt) => {
        const productState={...this.state.product,[evt.target.name]: evt.target.value}
        this.setState({product:productState})
    }

    onSave = async (e) => {
        e.preventDefault();
        try {
           this.setState( {product:{inStock:!!this.state.product.inStock}})
            this.setState({ loader: true })
            await axios.post('http://localhost:5000/api/products', this.state.product)
           
            
           
            this.setState({ success: true, loader: false, hasError: false,
                product: {brand:'', model: '', price: '', discount: '', inStock: false}
                 })
        } catch (e) {
            this.setState({ hasError: true, loader: false, success: false })
        }
    }

    render() {
        const {success,hasError,loader}=this.state;
        const {brand,model,price,discount,inStock}=this.state.product;
        return <div className="container col-4 m-3">
            <h4>Add New Product</h4>
            <hr />
            <ShouldRender condition={loader}>
                <Loader />
            </ShouldRender>
            <ShouldRender condition={hasError}>
                <Error />
            </ShouldRender>
            <ShouldRender condition={success}>
                <div className="alert alert-success">
                    Product Added Successfully
                </div>
            </ShouldRender>


            <form onSubmit={this.onSave}>
                <div className="mb-3">
                    <label for="brand" className="form-label">Brand</label>
                    <input type="text" value={brand}
                        name="brand" onChange={this.onControlChange}
                        className="form-control" id="brand" placeholder="Brand" />
                        {!brand?
                    <span className="text-danger">Brand is Mandatory</span>:null    
                    }
                </div>
                <div className="mb-3">
                    <label for="model" className="form-label">Model</label>
                    <input type="text" value={model}
                        name="model" onChange={this.onControlChange}
                        className="form-control" id="model" placeholder="Model" />
                <ShouldRender condition={!model}>
                    <span className="text-danger">Model is Mandatory</span>   
                    </ShouldRender>
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="text" value={price}
                        name="price" onChange={this.onControlChange}
                        className="form-control" id="price" placeholder="Price" />
                <ShouldRender condition={!price}>
                    <span className="text-danger">Price is Mandatory</span>   
                    </ShouldRender>
                </div>
                <div className="mb-3">
                    <label for="discount" className="form-label">Discount</label>
                    <input type="text" value={discount}
                        name="discount" onChange={this.onControlChange}
                        className="form-control" id="discount" placeholder="Discount" />
                        <ShouldRender condition={!discount}>
                    <span className="text-danger">Discount is Mandatory</span>   
                    </ShouldRender>
                </div>
                <div className="mb-3 col-4">
                    <label for="inStock" className="form-check-label">inStock</label>
                    <input type="checkbox" value={inStock}
                        name="inStock" onChange={this.onControlChange}
                        className="form-check-input" id="inStock" />
                </div>
                <hr />
                <button type="submit" disabled={!brand || !model || !price || !discount}  className="btn btn-success">
                    Save
                    <i className="fa fa-save"></i>
                </button>


            </form>

        </div>
    }
}

export default NewProduct;