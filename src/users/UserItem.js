import React from "react"

const UserItem=({user})=>{


    return   <div>
    <img className="rounded-circle" src={user.avatar_url} alt="" width={100} height="100"/>
    <br/>
    login:{user.login} 
    <br/>
    id:{user.id}
    <hr/>
    
    </div>
}

export default UserItem
