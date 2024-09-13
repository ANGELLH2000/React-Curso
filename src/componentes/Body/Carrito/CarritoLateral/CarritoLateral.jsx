import './CarritoLateral.css'
import scrAlt from '../../../../assets/img-cart.png';
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
function CarritoLateral() {
    return (
        <div className='container'>
            <div className='shoping-cart'>
                <div className='top'>
                    <div className='top-title'>
                    <p className='title-shoping-cart'>Carro de compras</p>
                    <IoMdClose />
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
function CarritoLateral1({ src, alt }) {
    return (
        <div className='container'>
            <div className='cart-container'>
                <div className='title'>
                    <p>Carrito de Compras</p>
                    <IoMdClose />
                </div>
                <p className='cant-productos-cart'>10 Productos</p>
                <ProductoCarrito />
                <span></span>
                <div>
                    <p>SubTotal (10 productos)</p>
                    <p>S/. 100.00</p>
                </div>
                <button>Ver Carrito</button>
            </div>
        </div>
    )
}

export default CarritoLateral;