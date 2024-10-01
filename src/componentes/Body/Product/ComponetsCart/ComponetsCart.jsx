import scrAlt from '../../../../assets/img-cart.png';
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import './ComponetsCart.css'
import { Link } from 'react-router-dom';

function BotonCart3() {//Agotado
    return (
        <div className='BotonCart3'>
            <p>Agotado</p>
        </div>
    )
}
function BotonCart2({ cant, AccionesBotones, dataProducto }) {//Con 1 Producto en el carro
    const { AumentarCantidad, RestarCantidad } = AccionesBotones
    return (
        <div className='BotonCart2'>
            <button onClick={() => { RestarCantidad(dataProducto['SKU']) }}><IoMdRemove /></button>
            <p >{cant} und{cant > 1 ? "s" : ""}</p>
            <button onClick={() => { AumentarCantidad(dataProducto['SKU']) }}><IoMdAdd /></button>
        </div>
    )
}

function BotonCart1({ AccionesBotones, dataProducto }) {//Sin productos agregados
    const { AgregarProducto } = AccionesBotones
    return (
        <button onClick={() => AgregarProducto(dataProducto)} className='BotonCart' style={{ cursor: 'pointer' }}>
            <p >Agregar</p>
        </button>
    )
}
function BotonCart({ AccionesBotones, outsold, dataProducto }) {
    const { ExistenciaDeProducto } = AccionesBotones
    if (outsold === true) {
        return (<BotonCart3 />);
    } else {
        return ExistenciaDeProducto(dataProducto['SKU'])[0] ? <BotonCart2 dataProducto={dataProducto} cant={ExistenciaDeProducto(dataProducto['SKU'])[1]} AccionesBotones={AccionesBotones} /> : <BotonCart1 AccionesBotones={AccionesBotones} dataProducto={dataProducto} />;
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
            {precioDcto && (<><p className='precioDcsto'>S/. {precio}</p><p className='precio'>S/. {precioDcto}</p></>)}
            {!precioDcto && <p className='precio'>S/. {precio}</p>}
        </div>
    )
}
function ImagenCart({ src, alt, SKU }) {
    return (
        <Link to={`/Tienda/Producto/${SKU}`} className='ImagenCart'>
            <img loading='lazy' src={src ? src : src = scrAlt} alt={alt} />
        </Link>
    )
}

export { EtiquetaCart, ImagenCart, BotonCart, PrecioCart };