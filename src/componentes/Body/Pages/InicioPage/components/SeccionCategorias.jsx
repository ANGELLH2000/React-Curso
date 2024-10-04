import CategoryCart from '../../../Product/ProductCart/CategoryCart';
import { HashLink } from 'react-router-hash-link';

function SeccionCategorias({ categorias }) {
    return (
        <div className='SeccionCategorias efecto1'>
            <div className="title">
                <p>Categorías Populares</p>
                <HashLink smooth to="/Tienda/Categoria/Panadería#title">Ver Tienda</HashLink>
            </div>
            <div className='flex-container'>
                {categorias.map(categoria => (
                    <CategoryCart key={categoria.Id} categoriaData={categoria} />
                ))}
            </div>
        </div>
    )
}

export default SeccionCategorias
