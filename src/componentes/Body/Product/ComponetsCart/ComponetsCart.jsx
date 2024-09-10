import scrAlt from '../../../../assets/img-cart.png';
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import './ComponetsCart.css'

function BotonCart3() {//Agotado
    return (
        <div className='BotonCart3'>
            <p>Agotado</p>
        </div>
    )
}
function BotonCart2({ cant }) {//Con 1 Producto en el carro
    return (
        <div className='BotonCart2'>
            <div><IoMdRemove /></div>
            <p >{cant} und{cant > 1 ? "s" : ""}</p>
            <div><IoMdAdd /></div>
        </div>
    )
}

function BotonCart1() {//Sin productos agregados
    return (
        <div className='BotonCart'>
            <p >Agregar</p>
        </div>
    )
}
function BotonCart({ outsold, agregados }) {

    if (outsold === true) {
        return (<BotonCart3 />);
    } else {
        return agregados > 0 ? <BotonCart2 cant={agregados} /> : <BotonCart1 />;
    }

}
function EtiquetaCart({ texto, tipo, outsold }) {
    if (outsold === true) {
        return (
            <div className='EtiquetaCart outsold'>Agotado</div>
        )
    } else {
        return (
            texto && tipo ? <div className={`EtiquetaCart ${tipo}`}>{texto}</div> : <></>
        )
    }

}

function PrecioCart({ precio, precioDcto }) {
    return (
        <div className='containderPrecio'>
            {precioDcto ? <p className='precioDcsto'>S/. {precioDcto}</p> : <></>}
            <p className='precio'>S/. {precio}</p>
        </div>
    )
}
function ImagenCart({ src, alt }) {
    return (
        <div className='ImagenCart'>
            <img src={src ? src : src = scrAlt} alt={alt} />
        </div>
    )
}

export { EtiquetaCart, ImagenCart, BotonCart, PrecioCart };