import { useContext, useEffect } from 'react'
import './CarritoPage.css'
import Datos from './components/Datos'
import Items from './components/Items'
import { GlobalContext } from '../../../Context/Conntext'
import Redireccion from './components/Redireccion'
import Loader from '../../Loader/Loader'

export default function CarritoPage() {
    const { carritoHook ,firePedidoLoading} = useContext(GlobalContext)
    const { carrito, cantAndTotal } = carritoHook
    if (cantAndTotal[0] === 0) {
        return (
            <div>
                <Redireccion />
            </div>
        )
    }
    if(firePedidoLoading){
        return (
            <Loader texto="Creando Pedido"/>
        )
    }
    return (
        <div className='container-CarritoPage'>
            <h1>Carrito de Compras</h1>
            <div className="items-container">
                {carrito.map((producto) =>
                    <Items key={producto.id} data={producto} botones={carritoHook} />
                )}
            </div>
            <div className="datos-container">
                <Datos total={cantAndTotal[1]} />
            </div>
        </div>
    )

}
