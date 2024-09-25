import { Link } from 'react-router-dom'
import BotonesCart from './BotonesCart'
import './ProductPage.css'
function Datos({data,carritoHook}) {
    return (
        <div className="datos">
            <p className="title">{data.nombre}</p>
            {data.precio.precioDscto &&(<div className="price"><p className='Dscto'>S/. {data.precio.precio}</p><p>S/. {data.precio.precioDscto}</p></div>)}
            {!data.precio.precioDscto&&(<div className="price"><br /><p>S/. {data.precio.precio}</p></div>)}
            <div className="reviw">5 estrellasos</div>
            <p className="description">{data.descripcion}</p>
            <BotonesCart data={data} carritoHook={carritoHook}/>
            
            <div>
                <p className='DatosExtras'>SKU: <span>{data.SKU}</span></p>
                <p className='DatosExtras'>Categoria: <Link to={`/Tienda/Categoria/${data.categoria}`}><span>{data.categoria}</span></Link></p>
            </div>

        </div>
    )
}

export default Datos
