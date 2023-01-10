
import React,{useContext} from "react";

const valContext=React.createContext(0)

const Child4=()=>{
const value=useContext(valContext)
return <div>
    Child4 {value}
    
    </div>}
const Child3=()=><div>Child3<Child4/></div>
const Child2=()=><div>Child2<Child3/></div>
const Child1=()=><div>Child1<Child2/></div>

const Parent=()=><div>Parent 
    <valContext.Provider value={10}>

    <Child1/>
    </valContext.Provider>
    </div>
const Contact=()=>{
    return <div>

    <h1>Contact Page</h1>
    <Parent/>
    </div>
}

export default Contact;