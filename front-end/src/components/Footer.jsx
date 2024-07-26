import React from "react";
import infoRedesSociales from "../social/redesSociales";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
let redesSociales = infoRedesSociales;
const Footer = ()=>{
    return(
        <footer className="footer">
          <div className="box__container">
            <div className="box">
              <h3>contactanos!</h3>
              <p>
                PARA MÁS INFORMACIÓN, QUEJAS O SUGERENCIAS PUEDES CONTACTARNOS
              </p>
            </div>
    
            <div className="box">
              <h3>redes sociales</h3>
              {redesSociales.map(e=><Link to={e.url} target="_BLANK">{e.name}</Link>)}
            </div>
    
            <div className="box">
              <h3>info:</h3>
              <div className="info">
                <i className="fas fa-phone"></i>
                <p>393-124-1397 <br />392-185-1116</p>
              </div>
    
              <div className="info">
                <i className="fas fa-envelope"></i>
                <p>raya.jp08@gmail.com <br />cristian.gutierrez0142@alumnos.udg.mx</p>
              </div>
    
              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <p>Ocotlán, Jalisco <br />47801</p>
              </div>
            </div>
          </div>
    
          <h1 className="credits">©copyright {new Date().getFullYear().toString()} RAGUMWEB</h1>
        </footer>
    );
};

export default Footer;