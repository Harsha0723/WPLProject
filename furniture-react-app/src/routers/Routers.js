import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home"

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = 'home' />} />
        <Route path="home" element= {<Home/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />
    </Routes>
};

export default Routers;