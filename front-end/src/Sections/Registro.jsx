import React from "react";
import { useState } from "react";
import "../styles/Registro.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import {useAuth} from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";
const Registro= ()=>{
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [ErrorResponse, setErrorResponse] = useState("");
    const auth = useAuth();
    const goTo = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/registrarse`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    usuario,
                    correo,
                    contraseña,
                }),
            });

            if(response.ok){
                console.log("Usuario Creado Correctamente");
                setErrorResponse("");
                goTo("/login");
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
        <form className="form" onSubmit={handleSubmit}>
            <div className="logo"><span>RAGUM</span>WEB</div>
            {!!ErrorResponse && <div className="errorMessage">{ErrorResponse}</div>}
            <input type="text"className="input" required placeholder="Nombre de usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
            <input type="email" className="input"required placeholder="Correo Electronico" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
            <input type="password" className="input"required minLength={"8"} maxLength={16} placeholder="Contraseña 8-16" value={contraseña} onChange={(e)=>setContraseña(e.target.value)}/>
            <input type="submit" className="btn-registrarse" value="Registrarse" />
            <p>Ya tienes una cuenta? <Link to="/login"><span className="sesion">Iniciar sesión</span></Link></p>
        </form>
    );
}

export default Registro;