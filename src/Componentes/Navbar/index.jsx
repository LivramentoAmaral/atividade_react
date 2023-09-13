import React from "react";
import style from "./Navbar.module.css";

function Navbar(){
    return(
        <>
        <div className={style.navbar}>
            <div className={style.div_logo}>
                <img src="https://www.ifpi.edu.br/topo_ifpi_corrente.png" alt="Logo" />
            </div>
            <a href="#">Login</a>
            <a href="#" >Home</a>
        </div>
        </>
    );
}

export default Navbar;
