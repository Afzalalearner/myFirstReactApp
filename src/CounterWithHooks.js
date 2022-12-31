import React,{useState} from "react";

const CounterWithHooks=()=>{

    const [count,setCount]=useState(100)

    function inc(){
        setCount(count+1)
        console.log('inc')
    }

    function dec(){
        setCount(count-1)
        console.log('dec')
    }

    return <>
    <h1>Counter With Hooks</h1> 
    <h3>count:{count}</h3>  
    <button className="btn btn-sm btn-danger m-3" onClick={inc}>++</button>
    <button className="btn btn-sm btn-danger m-3" onClick={dec}>--</button>
    
    </>
}

export default CounterWithHooks;