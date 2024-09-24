import './ProductPage.css'
import { IoMdRemove, IoMdAdd } from "react-icons/io";

function BotonesCart() {
    return (
        <div className="botones">
            <div className='operadores'>
                <div className="boton"><IoMdRemove/></div>
                <p>1</p>
                <div className="boton"><IoMdAdd/></div>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default BotonesCart
