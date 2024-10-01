import { Link } from 'react-router-dom'
import './ProductCart.css'
import { ReactSVG } from 'react-svg'
import { HashLink } from 'react-router-hash-link'
function CategoryCart({ categoriaData }) {
    return (
        <HashLink to={`/Tienda/Categoria/${categoriaData.Nombre}#title`}>
            <div className="cartCategory" >
                <img  src={categoriaData.img} alt={categoriaData.Nombre} />
                <p className='nombreCategoria'>{categoriaData.Nombre}</p>
            </ div >
        </HashLink>
    )
}
export default CategoryCart

