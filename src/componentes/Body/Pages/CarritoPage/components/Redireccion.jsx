import React, { useEffect, useState } from 'react'
import { FaRegFaceGrinWink } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
function Redireccion() {
    const[contador,setContador]=useState(5)
    const navigate=useNavigate()
    useEffect(()=>{
        
        if(contador>0){
            const timer= setTimeout(()=>{
                setContador(contador-1)
            },1000)
            return () => clearTimeout(timer);
        }
        if(contador==0){
            navigate('/Tienda')
        }
        
    },[contador])
    return (
        <div className='container-redireccion'>
            <h2>No hay productos en tu carrito</h2>
            <FaRegFaceGrinWink />
            <h3>No te preocupes, te redirigimos a la Tienda para que agregues el que mas te guste.</h3>
            <p>Redirigiendo es {contador}s</p>
            <h4>Si no deseas esperar , da click en el siguiente enlace: </h4>
            <Link to={'/Tienda'}>Click Aquí</Link>
        </div>
    )
}

export default Redireccion
