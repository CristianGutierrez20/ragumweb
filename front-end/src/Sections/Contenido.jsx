import React from "react";
import icon1 from "../img/iconsContenido/icon1.png";
import icon2 from "../img/iconsContenido/icon2.png";
import icon3 from "../img/iconsContenido/icon3.png";
import "../styles/Contenido.css";
import { Link } from "react-router-dom";
const Contenido = ()=>{
    return(
            <section className="source" id="source">
            
                <div className="box__container">
                    <Link to={"/contenido/java-basico/:id"} className="box" >
                        <img src={icon1} alt="icon__1" />
                        <h3>java básico</h3>
                        <p>
                        en esta sección aprenderas lo básico de programación en java,
                        manejar un entorno de trabajo y crear aplicaciones sencillas.
                        </p>
                        
                    </Link> 
            
                    <Link className="box" to={"#"}>
                        <img src={icon2} alt="icon__2" />
                        <h3>Estructuras de datos</h3>
                        <p>
                        Las estructuras de datos permiten gestionar la data de una aplicación
                        optimizando la memoria y recursos del servidor o PC en la que es ejecutada.
                        </p>
                    </Link>
            
                    <Link className="box" to={"#"}>
                        <img src={icon3} alt="icon__3" />
                        <h3>programación orientada a objetos</h3>
                        <p>
                        La POO organiza el código de manera modular lo que facilita
                        la creación, mantenimiento y reutilización de código en el desarrollo de software. 
                        </p>
                    </Link>
                </div>
        </section>
    );
}

export default Contenido;