import ProductCart from '../../../Product/ProductCart/ProductCart'
function ListaProductos({ carritoHook, NombreCategoria, data }) {
    return (
        <div className="listaProductos">
            {
                data.filter(producto => producto["categoria"] === NombreCategoria).map((producto) => (
                    <ProductCart
                    key={producto.id}
                    dataProducto={producto}
                    AccionesBotones={carritoHook}
                />
            ))
            }
        </div>
    )

}

export default ListaProductos
