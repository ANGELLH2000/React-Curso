import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa6";
function BarraCategorias({ FireCategoria, NombreCategoria }) {
    return (
        <div className="categoriasTodas">
            <ul className="categorias">
                {FireCategoria.map(categoria => (
                    <li key={categoria.id}>
                        <Link to={`/Tienda/Categoria/${categoria.title}`} className={categoria.title==NombreCategoria?`actual`:null}>
                            <p>{categoria.title}</p>
                            <FaChevronRight />
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default BarraCategorias
