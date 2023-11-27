import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import LaunchPage from "../pages/LaunchPage"

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to = 'home' />} />
        <Route path="home" element= {<LaunchPage/>} />
        <Route path="signup" element= {<SignUp/>} />
        <Route path="signin" element= {<SignIn/>} />
    </Routes>
};

export default Routers;