import './CarritoLateral.css'
import { useState, useEffect, useContext } from 'react';
import { IoMdClose } from "react-icons/io";
import CartProduct from '../Componets/CartProduct';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../../Context/Conntext';

function CarritoLateral({ visible, closeCart}) {
    const [isFade, setIsFade] = useState(true);
    const [isVisible, setIsVisible] = useState(visible);
    const navigate = useNavigate()
    const { carritoHook: { carrito, traerCarritoAlState, EliminarProducto, AumentarCantidad, RestarCantidad, cantAndTotal }} = useContext(GlobalContext)
    const IrCheckout = () => {
        cerrar();
        navigate('/Checkout')
    }
    const cerrar = () => {
        setIsFade(false)
    }
    useEffect(() => {
        if (!isFade) {
            const timeout = setTimeout(() => {
                //console.log("Se Destruye el componente  despues de 1s")
                setIsFade(true)
                closeCart()
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isFade])

    useEffect(() => {
        traerCarritoAlState()
        setIsVisible(visible)
    }, [visible])

    if (isVisible === false) {
        return (<></>)
    } else {
        return (
            <div className={`containerCartShop ${isFade ? 'fade-in' : 'fade-out'}`}  >
                <div className={`shoping-cart ${isFade ? 'slideIn' : 'slideOut'}`}>
                    <div className='top'>
                        <div className='top-title'>
                            <p className='title-shoping-cart'>Carro de compras</p>
                            <IoMdClose onClick={cerrar} style={{ cursor: 'pointer' }} />
                        </div>
                        <p className='items-title-shoping-cart c-707070'>{`${carrito.length > 0 ? `${carrito.length} Producto${carrito.length > 1 ? 's' : ''}` : 'Sin Productos en el Carrito'}`}</p>
                        <div className='list-products'>
                            {carrito.map(
                                producto => (
                                    <CartProduct
                                        key={producto.id}
                                        dataProducto={producto}
                                        EliminarProducto={EliminarProducto}
                                        AumentarCantidad={AumentarCantidad}
                                        RestarCantidad={RestarCantidad}
                                        cerrar={cerrar}
                                    />)
                            )}
                        </div>
                    </div>
                    <span className='skip'></span>
                    <div className='bottom'>
                        <div className='total-bottom'>
                            <p>Subtotal ({cantAndTotal[2]}{cantAndTotal[2] > 1 || cantAndTotal[2] === 0 ? " Unidades" : " Unidad"})</p>
                            <p>S/.{cantAndTotal[1]}</p>
                        </div>
                        <button className='boton-bottom' onClick={IrCheckout} >Finalizar Compra</button>
                    </div>
                </div>
            </div>
        )
    }


}
export default CarritoLateral;