import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Datos({total}) {
    const navigate=useNavigate()
    function crearPedido(){
        navigate('/Pedido/1234324')
    }
    return (
        <div className='datos'>
            <h2>Datos del Pedido</h2>
            <div className="input">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id='name' placeholder='Ingresa tu nombre completo'/>
                <IoAlertCircleOutline className='alert' />
            </div>

            <div className="input">
                <label htmlFor="phone">Número celular:</label>
                <input type="tel" size="9" id='phone' placeholder='Ingresa tu número celular' />
                <IoAlertCircleOutline className='alert' />
            </div>

            <div className="input">
                <label htmlFor="email">Correo:</label>
                <input type="email" pattern=".+@example\.com" id='email' placeholder='Ingresa tu correo electrónico' />
                <IoAlertCircleOutline className='alert' />
            </div>
            <p className='datos-errones'></p>
            <div className="total">
                <p>Total</p>
                <p>S/. {total}</p>
            </div>
            <button onClick={()=>crearPedido()}>
                Crear Pedido
            </button>
            
        </div>
    )
}

export default Datos
