import React from 'react'
import Datos from '../../ProductPage/Datos'

function SeccionProducto({carritoHook,infoProducto}) {
    return (
        <div className="SeccionProducto">
            <h3>Producto del mes</h3>
            <img src={infoProducto.scr} alt="img" />
            <Datos data={infoProducto} carritoHook={carritoHook} />
        </div>
    )
}
export default SeccionProducto