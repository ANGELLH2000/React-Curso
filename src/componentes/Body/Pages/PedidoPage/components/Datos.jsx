import React from 'react'

function Datos({data}) {
    return (
        <div className='datos'>
            <div className="short-info">
                <h4>Orden:</h4>
                <p>{data.IdPedido}</p>
            </div>
            <div className="short-info">
                <h4>Método de Entrega:</h4>
                <p>{data.Entrega.Tipo}</p>
            </div>
            <div className="short-info">
                <h4>Correo:</h4>
                <p>{data.Cliente.Correo}</p>
            </div>
            <div className="short-info">
                <h4>Dirección:</h4>
                <p>{data.Entrega.Direccion===''?'En Tienda':data.Entrega.Direccion}</p>
            </div>
            <div className="short-info">
                <h4>Número:</h4>
                <p>+51 {data.Cliente.WhatsApp}</p>
            </div>
            <div className="short-info">
                <h4>Comentarios:</h4>
                <p>{data.Comentario===''?'Sin Comentarios':data.Comentario}</p>
            </div>
        </div>
    )
}

export default Datos
