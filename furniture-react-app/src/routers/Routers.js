import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/seller/AddProduct"
import EditProduct from "../pages/seller/EditProduct";
import ProductList from "../pages/seller/ProductList";



const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = 'home' />} />
        <Route path="home" element= {<Home/>} />
        <Route path="shop" element= {<Shop/>} />
        <Route path="shop/:id" element= {<ProductDetails/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />                            
        <Route path="seller/add_product/:username" element= {<AddProduct/>} />
        <Route path="seller/edit_product/:username/:productId" element= {<EditProduct/>} />
        <Route path="seller/product_list/:username" element= {<ProductList/>} />



    </Routes>
};

export default Routers;