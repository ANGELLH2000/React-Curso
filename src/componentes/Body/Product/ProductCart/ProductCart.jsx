import {EtiquetaCart,ImagenCart,PrecioCart,BotonCart} from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({nombre,dscto,textoDscto,scr,alt,precio,precioDcto,outsold,agregados}) {
    console.log("Se creo: ",nombre)
    return (
        <div className='containerCart'>
            <EtiquetaCart tipo={dscto} texto={textoDscto}/>
            <ImagenCart src={scr} alt={alt}/>
            <p className='NombreProducto'>{nombre}</p>
            <PrecioCart precio={precio} precioDcto={precioDcto}/>
            <BotonCart outsold={outsold} agregados={agregados}/>
        </div>
    )
}
export default ProductCart

