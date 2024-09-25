import { Link } from 'react-router-dom'
import './ProductCart.css'
function CategoryCart({ categoriaData }) {
    return (
        <Link to={`/Tienda/Categoria/${categoriaData.Nombre}`}>
            <div className="containerCategory" >
                <p className='nombreCategoria'>{categoriaData.Nombre}</p>
                <img src={categoriaData.img} alt={categoriaData.Nombre} />
            </ div >
        </Link>
    )
}
export default CategoryCart

