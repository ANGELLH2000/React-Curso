import { Link } from 'react-router-dom'
import './ProductCart.css'
let src2 = "https://www.elastor.com.co/wp-content/uploads/2020/08/bombones.png"
function CategoryCart({ categoriaData }) {
    return (
        <Link to={`Categoria/${categoriaData.Nombre}`}>
            <div className="containerCategory" >
                <p className='NombreProducto'>{categoriaData.Nombre}</p>
                <img src={categoriaData.img} alt={categoriaData.Nombre} />
            </ div >
        </Link>
    )
}
export default CategoryCart

