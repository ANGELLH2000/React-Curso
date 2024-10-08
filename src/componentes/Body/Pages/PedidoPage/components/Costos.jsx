import React from 'react'

function Costos() {
    return (
        <div className='costos'>
            <div className="short-title">
                <h5>Productos</h5>
                <p className='subtitle'>Total</p>
            </div>


            <div className="short-costo">
                <h5>title producto</h5>
                <p>S/. 30.00</p>
            </div>
            <div className="short-costo">
                <h5>title producto</h5>
                <p>S/. 30.00</p>
            </div>
            <div className="short-costo">
                <h5>title producto</h5>
                <p>S/. 30.00</p>
            </div>
            <div className="short-costo">
                <h5>title producto</h5>
                <p>S/. 30.00</p>
            </div>

            <hr />

            <div className="short-title">
                <h5>SubTotal</h5>
                <p className='subtitle'>S/. 30.00</p>
            </div>

            <div className="short-title">
                <h5>Envio</h5>
                <p>Envio Gratis</p>
            </div>
            

            <div className="short-title">
                <h5>Total</h5>
                <p className='subtitle'>S/. 85.00</p>
            </div>
        </div>
    )
}

export default Costos
