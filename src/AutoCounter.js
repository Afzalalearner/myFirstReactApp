import React, { useEffect, useState } from "react";

const AutoCounter=()=> {

    const [count,setCount]=useState(0)
    
    
    useEffect(() => {
            setTimeout(() => {
                setCount(count+1)
                console.log(`Updating Count:${count}`)
            }, 1000)
            
        },[count]
        ) 

    // componentWillUnmount = () => {
    //     console.log('Clearing Interval')
    //     clearInterval(this.interval)
    // }
            return <>
            <h3>AutoCounter</h3>
            <h4>{count}</h4>
        </>
    }


export default AutoCounter;