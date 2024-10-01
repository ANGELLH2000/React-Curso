import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa6";
function BarraCategorias({ categorias, NombreCategoria }) {

    return (
        <div className="categoriasTodas">
            <ul className="categorias">
                {categorias.map(categoria => (
                    <li>
                        <Link key={categoria.Id} to={`/Tienda/Categoria/${categoria.Nombre}`} className={categoria.Nombre==NombreCategoria?`actual`:null}>
                            <p>{categoria.Nombre}</p>
                            <FaChevronRight />
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default BarraCategorias
