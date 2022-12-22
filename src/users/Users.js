import React from "react";
import axios from 'axios';
import UserItem from "./UserItem";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
class Users extends React.Component {

    state = {
        users:[],
        hasError: false,
        loading:true
    }
    constructor() {
        super()


setTimeout(()=>{

    axios.get('https://api.github.com/users')
    .then(res => this.setState({ users: res.data,loading:false }))
    .catch(err =>this.setState({ hasError: true,loading:false }))
    // .finally(()=>this.setState({loading:false}))
},2000)
}

    render() {
        return <div className="container">
            {this.state.hasError?<Error/> :null}

            <h1>Users</h1>
            <hr />
            {this.state.Loader?<Loader/>:null }
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>

    }


}

export default Users;