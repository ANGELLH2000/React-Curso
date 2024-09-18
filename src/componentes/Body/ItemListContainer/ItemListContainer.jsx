import './ItemListContainer.css'
import ProductCart from '../Product/ProductCart/ProductCart'
import { productos } from '../../../data/data'
import useCarrito from '../../Hooks/hooks'
import { useEffect } from 'react'

function navBar({ gretting }) {
    const { carrito, agregarProductoAlCarrito} = useCarrito()
    console.log("El carro desde Item>", carrito)
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
                                agregar={ agregar }
                    />
                    )
                )}


            </div>
        </>
    )
}

export default navBar