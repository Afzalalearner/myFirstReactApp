
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer'
import Home from "./Home";
import About from "./About";
import ProductList from "./products/ProductList";
import Users from "./users/Users";
import Contact from "./Contact";
import NotFound from "./NotFound";
import NewProduct from "./products/NewProduct";
import ProductDetail from "./products/ProductDetail";
import Signin from "./auth/Signin";
import Signout from "./auth/Signout";
import Signup from "./auth/Signup";

// import Counter from "./Counter";
// import NewProduct from "./products/NewProduct";
// import Name from "./Name";
const App=()=>{
    return <div>
    {/* <h1>Welcome to React App</h1>
    <Name fName='Afzal'/>
    <Name fName='AbuBakr'/>
    <Name fName='Musfirah'/>
    <Counter count={10}/> */}
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/products'element={<ProductList/>}/>
        <Route path='/products/new' element={<NewProduct/>}/>
        <Route path='/products/detail/:id' element={<ProductDetail/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signout' element={<Signout/>}/>  
        <Route path='/signup' element={<Signup/>}/>     
        
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    {/* <NewProduct/> */}
    {/* <ProductList/> */}
    {/* <Users/> */}
    </div>
}

export default App;