import "../styles/Login.css";
import {useAuth} from "../auth/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../auth/constants";
import { AuthError, AuthResponse } from "../types/types";
const Login = ()=>{
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [ErrorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/login`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    usuario,
                    contraseña,
                }),
            });

            if(response.ok){
                console.log("Usuario Logeado Correctamente");
                setErrorResponse("");
                const json = (await response.json());
                if(json.body.accessToken && json.body.refreshToken){
                    auth.saveUser(json);
                    goTo("/");
                }
            }   
            else{
               const json = (await response.json());
               setErrorResponse(json.body.error);
                return;
            }
        }
        catch(error){
            console.log(error);
        }   

    }
    if(auth.isAuthenticated){
        return <Navigate to={"/"}/>
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <div className="logo"><span>RAGUM</span>WEB</div>
            {!!ErrorResponse && <div className="errorMessage">{ErrorResponse}</div>}
            <input type="text" required className="input" placeholder="Usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
            <input type="password" required className="input" minLength={"8"} maxLength={16} placeholder="Contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
            <input type="submit" className="btn-login" value="Login"/>
            <p>No tienes una cuenta? <Link to="/registrarse"><span className="registrarse">Registrate aquí</span></Link></p>
        </form>
    );
}

export default Login;