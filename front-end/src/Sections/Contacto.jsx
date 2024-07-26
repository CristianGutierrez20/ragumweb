import React from "react";
import "../styles/Contacto.css";
import Cris from "../img/Colaboradores/cris.jpg";
import Imelda from "../img/Colaboradores/imelda.jpg";
import Raya from "../img/Colaboradores/raya.webp";
const Contacto = ()=>{
    return(
        <div>
          <div className="subscribe">
            <h3>¡envianos un comentario!</h3>
            <p>
              dinos tu opinión acerca de nuestro sitio y de los recursos que te ofrecemos
            </p>

            <form action="https://formsubmit.co/cristianalegm2001@gmail.com" method="post" target="_blank">
                <input type="email" name="email" placeholder="ingresa tu email" autoComplete="off" required/>  
                <textarea name="comments" id="" cols="30" rows="10" placeholder="Comentarios" required></textarea>
                <input type="submit" value="Enviar" className="btn" />
            </form>
          </div>
          <div className="opinions">

            <div className="box__container">
              <div className="box">
                <i className="fas fa-atom"></i>
                <div className="user">
                  <img src={Raya} alt="JuanR" />
                  <h3>juan r</h3>

                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <div className="comments">
                    <p>estructuración y diseño de la página</p>
                  </div>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-atom"></i>
                <div className="user">
                  <img src={Cris} alt="CristianGM" />
                  <h3>Cristian GM</h3>

                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>

                  <div className="comments">
                    <p>Estructura, Diseño y Programación de la Página </p>
                  </div>
                </div>
              </div>

              <div className="box">
                <i className="fas fa-atom"></i>
                <div className="user">
                  <img src={Imelda} alt="imeldaKarina" />
                  <h3>imelda karina s.</h3>

                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <div className="comments">
                    <p>documentación oficial y contribución de ideas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Contacto;