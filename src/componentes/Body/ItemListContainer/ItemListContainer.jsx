import './ItemListContainer.css'
import ProductCart from '../Product/ProductCart/ProductCart'
import {productos} from '../../../data/data'
function navBar({ gretting }) {
    return (
        <>
            <h3>{gretting}</h3>
            <div className='contenedor '>{/* agregar contenedor-stop cuando se abra el carrito*/}
                {productos.map(
                    producto=>(
                    <ProductCart 
                    key={producto.id} 
                    nombre={producto.nombre}
                    dscto={producto.descuento.tipo}
                    textoDscto={producto.descuento.texto}
                    scr={producto.scr} 
                    alt={producto.descripcion}
                    precio={producto.precio.precio}
                    precioDcto={producto.precio.precioDscto}
                    outsold={producto.estadoProducto.outsold}
                    agregados={producto.estadoProducto.agregados}
                    />
                )
                )}
                
                
            </div>
        </>
    )
}

export default navBar