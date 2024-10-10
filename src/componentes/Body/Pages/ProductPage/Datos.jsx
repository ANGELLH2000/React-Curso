import { Link } from 'react-router-dom'
import BotonesCart from './BotonesCart'
import './ProductPage.css'
function Datos({ FireData}) {
    
    return (
        <div className="datos">
            <p className="title">{FireData.title}</p>
            {FireData.precioDscto && (<div className="price"><p className='Dscto'>S/. {FireData.precio}</p><p>S/. {FireData.precioDscto}</p></div>)}
            {!FireData.precioDscto && (<div className="price"><br /><p>S/. {FireData.precio}</p></div>)}
            <div className="reviw">5 estrellasos</div>
            <p className="description">{FireData.description}</p>
            <p>¿Acaso no se te antoja?</p>
            <BotonesCart data={FireData}/>

            <div>
                <p className='DatosExtras'>SKU: <span>{FireData.SKU}</span></p>
                <p className='DatosExtras'>Categoría: <Link to={`/Tienda/Categoria/${FireData.category}`}><span>{FireData.category}</span></Link></p>
            </div>
        </div>
    )
}

export default Datos
