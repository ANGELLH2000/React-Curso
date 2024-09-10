import { EtiquetaCart, ImagenCart, PrecioCart, BotonCart } from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({ nombre, dscto, textoDscto, scr, alt, precio, precioDcto, outsold, agregados }) {
    return (
        <div className={`containerCart ${outsold === true ? 'grey' : ''}`} >
            <EtiquetaCart tipo={dscto} texto={textoDscto} outsold={outsold}/>
            <ImagenCart src={scr} alt={alt} />
            <p className='NombreProducto'>{nombre}</p>
            <PrecioCart precio={precio} precioDcto={precioDcto}/>
            <BotonCart outsold={outsold} agregados={agregados}/>
        </ div >
            )
}
            export default ProductCart

