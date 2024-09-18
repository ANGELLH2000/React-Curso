import { productos } from '../../../../data/data';
import { EtiquetaCart, ImagenCart, PrecioCart, BotonCart } from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({ dataProducto, agregar}) {
    return (
        <div className={`containerCart ${dataProducto.estadoProducto.outsold === true ? 'grey' : ''}`} >
            <EtiquetaCart tipo={dataProducto.descuento.tipo} texto={dataProducto.descuento.texto} outsold={dataProducto.estadoProducto.outsold}/>
            <ImagenCart src={dataProducto.scr} alt={dataProducto.descripcion} />
            <p className='NombreProducto'>{dataProducto.nombre}</p>
            <PrecioCart precio={dataProducto.precio.precio} precioDcto={dataProducto.precio.precioDscto}/>
            <BotonCart agregar={agregar} dataProducto={dataProducto} outsold={dataProducto.estadoProducto.outsold} agregados={dataProducto.estadoProducto.agregados}/>
        </ div >
            )
}
            export default ProductCart

