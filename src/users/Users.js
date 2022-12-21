import React from "react";
import axios from 'axios';
import UserItem from "./UserItem";

class Users extends React.Component{
    
    state={
        users:[]
    }
    constructor(){
        super()

        

        axios.get('https://api.github.com/users')
        .then(res=>this.setState({users:res.data}))
        .catch(err=>console.log(err))
    }

    render(){
        return <div className="container">
                        <h1>Users</h1>
            <hr/>
            {this.state.users.map(user=><UserItem user={user}/>)}
        </div>
    }
}

export default Users;