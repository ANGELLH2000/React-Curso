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
function BotonCart2({ cant, AccionesBotones, dataProducto }) {//Con 1 Producto en el carro
    const { AumentarCantidad, RestarCantidad } = AccionesBotones
    return (
        <div className='BotonCart2'>
            <div onClick={() => { RestarCantidad(dataProducto['SKU']) }} style={{ cursor: 'pointer' }}><IoMdRemove /></div>
            <p >{cant} und{cant > 1 ? "s" : ""}</p>
            <div onClick={() => { AumentarCantidad(dataProducto['SKU']) }} style={{ cursor: 'pointer' }}><IoMdAdd /></div>
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