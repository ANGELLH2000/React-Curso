import './ItemListContainer.css'
import ProductCart from '../Product/ProductCart/ProductCart'
import { productos } from '../../../data/data'
import useCarrito from '../../Hooks/hooks'
import { useEffect } from 'react'

function ItemListContainer({ gretting ,carritoHook}) {
    const {carrito,AumentarCantidad, RestarCantidad,AgregarProducto,ExistenciaDeProducto} = carritoHook
    const AccionesBotones={
        carrito,
        AgregarProducto,
        AumentarCantidad,
        RestarCantidad,
        ExistenciaDeProducto
    }
    const agregar=(obj)=>{
        agregarProductoAlCarrito(obj)
    }

    return (
        <>
            <h3>{gretting}</h3>
            <div className='contenedor '>{/* agregar contenedor-stop cuando se abra el carrito*/}
                {productos.map(
                    producto => (
                    <ProductCart
                                key={producto.id}
                                dataProducto={producto}
                                AccionesBotones={AccionesBotones}
                    />
                    )
                )}


            </div>
        </>
    )
}

export default ItemListContainer