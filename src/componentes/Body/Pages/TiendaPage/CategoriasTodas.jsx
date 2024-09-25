import { Link } from "react-router-dom"

function CategoriasTodas({categorias,NombreCategoria}) {
    
    return (
        <div className="categoriasTodas">
            <p>Categoría Actual:</p>
            <ul className="categoriaActual">
                <li>{NombreCategoria}<span></span></li>
            </ul>
            <p>Categorías:</p>
            <ul className="categorias">
                {NombreCategoria!="Todos" && <Link to="/Tienda/Categoria/Todos"><li>Todos<span></span></li></Link>}
                {categorias.map(categoria=>(
                    categoria.Nombre!=NombreCategoria && (<Link key={categoria.Id} to={`/Tienda/Categoria/${categoria.Nombre}`}><li>{categoria.Nombre}<span></span></li></Link>)
                ))}
            </ul>
        </div>
    )
}

export default CategoriasTodas
