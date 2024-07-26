import React from "react";
import computer from "../img/computer.jpg";
import "../styles/Inicio.css";
import {useAuth} from "../auth/AuthProvider";
import { Link } from "react-router-dom";
const Inicio = () =>{
    const auth = useAuth();
    return(
        <div className="inicio">
            <p>¡Bienvenido {auth.getUser()?.usuario || ""}!</p>
            <h3>aprende java <span>con nosotros!</span></h3>
            <p>
            Java sigue siendo un lenguaje de relevancia y brinda a los programadores buenas prácticas
            </p>
            <p>¡Aprende a Programar!</p>

            <Link to={"https://youtu.be/gNR8UjOquOw?si=I84WzC1LpNJHYU3J"} className={"btn"} target="_blank">Instalar entorno</Link>
            <div className="image">
            <img src={computer} alt="computer"/>
            </div>  
        </div>     
    );
}

export default Inicio;