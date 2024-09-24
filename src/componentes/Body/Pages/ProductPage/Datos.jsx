import BotonesCart from './BotonesCart'
import './ProductPage.css'
function Datos({data}) {
    return (
        <div className="datos">
            <p className="title">{data.nombre}</p>
            <div className="price"><p className='Dscto'>S/. 20.00</p><p>S/. 20.00</p></div>
            <div className="reviw">5 estrellasos</div>
            <p className="description">{data.descripcion}</p>
            <BotonesCart />
            <div>
                <p className='DatosExtras'>SKU: <span>20022002</span></p>
                <p className='DatosExtras'>Categoria: <span>Comida</span></p>
            </div>

        </div>
    )
}

export default Datos
