import './CarritoLateral.css'
import scrAlt from '../../../../assets/img-cart.png';

import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

function ProductoCarrito() {
    return (
        <div className='cart-product'>
            <a href='#' className='img'>
                <img src={scrAlt} alt="" />
            </a>
            <div className='datos'>
                <div className='flex-r'>
                    <p>Tacita de Café</p>
                    <IoMdClose />
                </div>
                <p className='c-707070'>Datos adicional</p>
                <div className='flex-r'>
                    <p className='c-707070 line-through'>S/. 20.00</p>
                    <p className='c-B16927'>S/. 20.00</p>
                </div>
                <div className='cart-bottons'>
                </div>
                <p>Unidades</p>
            </div>
        </div>
    )
}
function CarritoLateral({ visible, closeCart }) {
    const [isFade, setIsFade] = useState(true);
    const [isVisible, setIsVisible] = useState(visible);
    const cerrar = () => {
        setIsFade(false)
    }

    useEffect(() => {
        if (!isFade) {
            const timeout = setTimeout(() => {
                console.log("Se Destruye el componente  despues de 1s")
                setIsFade(true)
                closeCart()
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isFade])

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    if (isVisible === false) {
        return (<></>)
    } else {
        return (
            <div className={`container ${isFade ? 'fade-in' : 'fade-out'}`}>
                <div className={`shoping-cart ${isFade ? 'slideIn' : 'slideOut'}`}>
                    <div className='top'>
                        <div className='top-title'>
                            <p className='title-shoping-cart'>Carro de compras</p>
                            <IoMdClose onClick={cerrar} style={{ cursor: 'pointer' }} />
                        </div>
                        <p className='items-title-shoping-cart c-707070'>10 Productos</p>
                        <div className='list-products'>
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                            <ProductoCarrito />
                        </div>
                    </div>
                    <span className='skip'></span>
                    <div className='bottom'>
                        <div className='total-bottom'>
                            <p>Subtotal</p>
                            <p>S/.100,00</p>
                        </div>
                        <a href="" className='boton-bottom'>Ver Carrito</a>
                    </div>
                </div>
            </div>
        )
    }


}
export default CarritoLateral;