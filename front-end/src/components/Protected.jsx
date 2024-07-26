import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

const Protected = ()=>{
    const auth = useAuth();
    return auth.isAuthenticated? <Outlet/> : <Navigate to="/login"/>
}

export default Protected;