import React from "react";
//import Inicio from "../paginas/Inicio";
//import Sobre from "../paginas/SobreNosotros";
//import PaginasUsuarios from "../paginas/PaginasUsuarios";


export default function Navegacion(){
    return(
        <ul>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/sobre'>Nosotros</a></li>
            <li><a href='/usuarios'>Usuarios</a></li>
        </ul>
    )
}