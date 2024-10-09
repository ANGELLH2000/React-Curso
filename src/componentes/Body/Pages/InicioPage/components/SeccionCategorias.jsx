import CategoryCart from '../../../Product/ProductCart/CategoryCart';
import { HashLink } from 'react-router-hash-link';

function SeccionCategorias({FireInfo}) {
    return (
        <div className='SeccionCategorias'>
            <div className="title">
                <p>Categorías Populares</p>
                <HashLink smooth to="/Tienda/Categoria/Todo#title">Ver Tienda</HashLink>
            </div>
            <div className='flex-container'>
                {FireInfo.map(info => (
                    <CategoryCart key={info.id} categoriaData={info}/>
                ))}
            </div>
        </div>
    )
}

export default SeccionCategorias
