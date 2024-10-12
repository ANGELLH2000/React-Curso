import React from 'react'

function Costos({ data }) {
    return (
        <div className='costos'>
            <div className="short-title">
                <h5>Productos</h5>
                <p className='subtitle'>Total</p>
            </div>

            {data.Productos.map((producto,index) => {
                return (
                    <div className="short-costo" key={index}>
                        <h5>{producto.Title}</h5>
                        <p>S/. {producto.Descuento===null?(producto.Precio*producto.Cantidad).toFixed(2):(producto.Descuento*producto.Cantidad).toFixed(2)}</p>
                    </div>
                )
            })}

            <hr />

            <div className="short-title">
                <h5>SubTotal</h5>
                <p className='subtitle'>S/. {data.Costos.Total}</p>
            </div>

            <div className="short-title">
                <h5>Envio</h5>
                <p>{data.Costos.Confirmacion==true?"Envio Gratis":"Por confirmar"}</p>
            </div>


            <div className="short-title">
                <h5>Total</h5>
                <p className='subtitle'>{data.Costos.Confirmacion==true?`S/. ${data.Costos.Total}`:"Por confirmar"}</p>
            </div>
        </div>
    )
}

export default Costos
