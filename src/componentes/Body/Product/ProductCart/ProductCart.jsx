import { EtiquetaCart, ImagenCart, PrecioCart, BotonCart } from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({ dataProducto, AccionesBotones }) {
    return (
        <div className={`containerCart ${dataProducto.estadoProducto.outsold === true ? 'grey' : ''}`} >
            <EtiquetaCart tipo={dataProducto.descuento.tipo} texto={dataProducto.descuento.texto} outsold={dataProducto.estadoProducto.outsold} />
            <ImagenCart src={dataProducto.scr} alt={dataProducto.descripcion} SKU={dataProducto['SKU']}/>
            <p className='NombreProducto'>{dataProducto.nombre}</p>
            <PrecioCart precio={dataProducto.precio.precio} precioDcto={dataProducto.precio.precioDscto} />
            <BotonCart AccionesBotones={AccionesBotones} dataProducto={dataProducto} outsold={dataProducto.estadoProducto.outsold} />
        </ div >
    )
}
export default ProductCart

