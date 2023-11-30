import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/seller/AddProduct"
import EditProduct from "../pages/seller/EditProduct";
import ProductList from "../pages/seller/ProductList";
import AccInfo from "../pages/seller/AccInfo";
import EditAccountInfo from "../pages/seller/EditAccountInfo";


const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = '/' />} />
        <Route path="home" element= {<Home/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />
        <Route path="shop" element= {<Shop/>} />
        <Route path="cart" element= {<Cart/>} />
        <Route path="shop/:id" element= {<ProductDetails/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />                            
        <Route path="seller/add_product/:username" element= {<AddProduct/>} />
        <Route path="seller/edit_product/:username/:productId" element= {<EditProduct/>} />
        <Route path="seller/product_list/:username" element= {<ProductList/>} />
        <Route path="seller/acc_info/:username" element= {<AccInfo/>} />
        <Route path="seller/edit_account_info/:username" element= {<EditAccountInfo/>} />





    </Routes>
};

export default Routers;