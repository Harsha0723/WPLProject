import React from "react";
import useAuth from "../custom-hooks/useAuth"
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { currentuser } = useAuth();

    return currentuser ? children : <Navigate to="login" />
};

export default ProtectedRoute;