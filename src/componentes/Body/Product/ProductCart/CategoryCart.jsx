import { Link } from 'react-router-dom'
import './ProductCart.css'
import { ReactSVG } from 'react-svg'
import { HashLink } from 'react-router-hash-link'
function CategoryCart({ categoriaData }) {
    return (
        <HashLink to={`/Tienda/Categoria/${categoriaData.title}#title`}>
            <div className="cartCategory" >
                <img  src={`CategoriasSVG/${categoriaData.img}`} alt={categoriaData.Nombre} />
                <p className='nombreCategoria'>{categoriaData.title}</p>
            </ div >
        </HashLink>
    )
}
export default CategoryCart

