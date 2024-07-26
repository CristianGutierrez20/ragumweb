import React from "react";
import { Link } from "react-router-dom";
import logoJava from "../img/java__logo.png";
import "../styles/Acerca.css";
const Acerca = ()=>{
    return(
    <section className="about" id="about">
      <div className="column">
        
        <div className="image">
          <img src={logoJava} alt="java__logo" />
        </div>

        <div className="container">
          <h3>definición</h3>
          <p>
            Java es una plataforma informática de lenguaje de programación
            creada por sun microsystems en 1995. Ha evolucionado desde sus
            humildes comienzos hasta impulsar una gran parte del mundo digital
            actual, ya que es una plataforma fiable en la que se crean muchos
            servicios y aplicaciones.
          </p>

          <p>
            Conocer Más:
          </p>

          <div className="buttons">
            <Link
              to="https://youtu.be/E8weQyNVWug?si=S5fRD11xuT2GHvzh"
              className="btn"
              target="_blank"
              ><i className="fa-brands fa-youtube"> YOUTUBE </i></Link>
            <Link
              to="https://www.java.com/es/download/help/whatis_java.html#:~:text=Java%20es%20una%20plataforma%20inform%C3%A1tica,crean%20muchos%20servicios%20y%20aplicaciones."
              className="btn"
              target="_blank"
              ><i className="fa-solid fa-globe"> WEB </i></Link>
          </div>
        </div>
      </div>
    </section>

    );
};

export default Acerca;