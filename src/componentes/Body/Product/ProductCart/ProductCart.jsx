import { EtiquetaCart, ImagenCart, PrecioCart, BotonCart } from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({ dataProducto, AccionesBotones ,FireProductoData}) {

    if(dataProducto===null){
        return(
            <div className={`containerCart ${FireProductoData.outsold === true ? 'grey' : ''}`} >
                <EtiquetaCart tipo={FireProductoData.descuento_tipo} texto={FireProductoData.descuento_texto} outsold={FireProductoData.outsold} />
                <ImagenCart src={FireProductoData.src} alt={FireProductoData.title} SKU={FireProductoData['SKU']}/>
                <p className='NombreProducto'>{FireProductoData.title}</p>
                <PrecioCart precio={FireProductoData.precio} precioDcto={FireProductoData.precioDscto} />
                <BotonCart AccionesBotones={AccionesBotones} dataProducto={FireProductoData} outsold={FireProductoData.outsold} />
            </ div >
        )
    }else{
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
    
}
export default ProductCart

