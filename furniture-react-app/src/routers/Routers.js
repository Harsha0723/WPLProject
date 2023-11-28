import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = 'home' />} />
        <Route path="home" element= {<Home/>} />
        <Route path="shop" element= {<Shop/>} />
        <Route path="shop/:id" element= {<ProductDetails/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />
    </Routes>
};

export default Routers;