import axios from 'axios'
import React, { useState } from 'react'
import ShouldRender from './../utils/ShouldRender'
import { useNavigate } from 'react-router-dom'

const Signin=()=>{

    const [user,setUser]=useState({
        userName:'',
        password:''

    })
    const [hasError,setError]=useState(false)

    const navigate=useNavigate()
    
    const onSignin=async (evt)=>{
        try{

            console.log('Signing in....')
            evt.preventDefault()
            //   console.log(user)
            const res=await axios.post('http://localhost:5000/api/users/signin',user)
            setError(false)
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data))
            navigate('/products')
        }catch(err){
            setError(true)
        }
    }

    const onInputChange=(evt)=>{

        // console.log(evt.target.name,evt.target.value)
        const newUser={...user,[evt.target.name]:evt.target.value}
        console.log(newUser)
        setUser(newUser)
    }


    return <div className='container'>
        <h1>Login</h1>
        
        <div className='col-4'>

            <ShouldRender condition={hasError}>
            <div className='alert alert-danger'>

                Wrong Username or Password
            </div>

            </ShouldRender>


        <form onSubmit={onSignin}>
            <div className='m-1'>
                <label for="userName" className='form-label'>UserName:  </label>
                <input type="text" onChange={onInputChange} name="userName" id="userName" placeholder="Username" className='form-control'/> 
            </div>
            <div className='m-1'>
                <label for="password" className='form-label'>Password:  </label>
                <input type="password" onChange={onInputChange} name="password" id="password" placeholder="Password" className='form-control'/> 
            </div>
            <div className='m-2'>
                <button type="submit" className='btn btn-sm btn-success'>Sign In</button>
            </div>
        </form>
    </div>
        </div>
}

export default Signin;