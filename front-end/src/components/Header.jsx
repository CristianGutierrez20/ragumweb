import React from "react";
import { useAuth } from "../auth/AuthProvider";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { API_URL } from "../auth/constants";
const Header = ()=>{
  const auth = useAuth();
  async function handleSignOut(e){
    e.preventDefault();
    try{
      const response = await fetch(`${API_URL}/signout`,{
        method: "DELETE",
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth.getRefreshToken()}`,
        },
      });

      if(response.ok){
        auth.signOut();
      }
    }
    catch(error){
      console.log(error);
    }
  }
  return(
      <header>
        <Link to={"/"} className="logo"><span>RAGUM</span>WEB</Link>
        <input type="checkbox" id="menu__bar" />
        <label htmlFor="menu__bar" className="fa fa-bars"></label>
        <nav className="navbar">
          <Link to={"./"}>Inicio</Link>
          <Link to={"./contenido"}>Contenido</Link>
          <Link to={"./acerca"}>Acerca</Link>
          <Link to={"./contacto"}>Contacto</Link>
          {auth.isAuthenticated? <a href="#" onClick={handleSignOut}>SignOut</a>: <Link></Link>}
        </nav>
      </header>
  );
};

export default Header;