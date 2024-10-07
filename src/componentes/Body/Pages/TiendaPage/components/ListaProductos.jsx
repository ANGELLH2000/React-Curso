import ProductCart from '../../../Product/ProductCart/ProductCart'
function ListaProductos({ carritoHook, NombreCategoria, data, FireData }) {
    if (NombreCategoria === "Todo") {
        return (
            <div className="listaProductos">
                {FireData.map((u) =>
                    <ProductCart
                        key={u.id}
                        dataProducto={null}
                        FireProductoData={u}
                        AccionesBotones={carritoHook}
                    />
                )}
            </div>);
    } else {
        return (
            <div className="listaProductos" >
                {
                    FireData.filter(producto => producto["category"] === NombreCategoria).map((u) => (
                        <ProductCart
                            key={u.id}
                            dataProducto={null}
                            FireProductoData={u}
                            AccionesBotones={carritoHook}
                        />
                    ))
                }
            </div>
        )
    }



}

export default ListaProductos
