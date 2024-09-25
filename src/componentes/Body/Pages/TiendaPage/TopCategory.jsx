import scrAlt from '../../../../assets/img-cart.png';
import CategoryCart from '../../Product/ProductCart/CategoryCart';
function TopCategory({ categorias }) {
    return (
        <div className='TopCategory'>
            <p className='title'>Categorías Populares</p>
            <div className='categorias-populares'>
                {categorias.map(categoria => (
                    <CategoryCart key={categoria.Id} categoriaData={categoria} />
                ))}
            </div>
        </div>
    )
}

export default TopCategory
