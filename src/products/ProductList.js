//Container Component
import React from "react";
import Product from "./Product";


const ProductList=()=>{
const data=[
    {id:1,brand:'Apple',model:'Iphone 12',price:1500,discount:0,inStock:true,
image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5SqdefjmoIVyxKJmY7NKqY3i2iJ1ieFtOE1fUsjustHs8UlY7cXmm0s5QIg53u69LhJw6TkZ7Dw&usqp=CAc'},
    {id:2,brand:'Samsung',model:'Galaxy Ultra S22',price:1200,discount:8,inStock:false,
image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAbXiF4tpQKpkYk0MtxbMtQVmgIi_F7aywraK6Af5_4LnvJv6jFpqRhYBBsJFAdw9HMUk97FfjAtU&usqp=CAc'},
    {id:3,brand:'Redmi',model:'Note 12 Pro Max',price:400,discount:5,inStock:true,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5tgKmv8sKFhSixgzDWg7tTi8LMtSMjbq6IaMjnamfxZAEWajpQXKCZeALwKEj7VIrYE&usqp=CAU'},

]




    return <div>
    <h1 style={{textAlign:'center'}}>Products</h1>
    <hr/>
    {data.map(product=><Product product={product}/>)}
    </div>
}

export default ProductList