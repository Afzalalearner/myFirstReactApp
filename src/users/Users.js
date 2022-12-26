import React from "react";
import axios from 'axios';
import UserItem from "./UserItem";
import Loader from "../utils/Loader";
import Error from "../utils/Error";
import ShouldRender from "../utils/ShouldRender";
class Users extends React.Component {

    state = {
        users:[],
        hasError: false,
        loader:true
    }
    constructor() {
        super()


setTimeout(()=>{

    axios.get('https://api.github.com/users')
    .then(res => this.setState({ users: res.data,loader:false }))
    .catch(err =>this.setState({ hasError: true,loader:false }))
    // .finally(()=>this.setState({loading:false}))
},2000)
}

    render() {
        return <div className="container-fluid">
            <ShouldRender condition={this.state.hasError}>
                <Error/>
            </ShouldRender>
            {/* {this.state.hasError?<Error/> :null} */}

            <h1>Users</h1>
            <hr />


            {this.state.loader?<Loader/>:null }
            {this.state.users.map(user => <UserItem user={user} />)}
        </div>

    }


}

export default Users;