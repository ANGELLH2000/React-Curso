import { useState } from 'react';
import { EtiquetaCart, ImagenCart, PrecioCart, BotonCart } from '../ComponetsCart/ComponetsCart';
import './ProductCart.css'
function ProductCart({ AccionesBotones, FireProductoData }) {
    const [imgLoading, setImgLoading] = useState(true)
    console.log("Me renderizo", imgLoading)
    if (FireProductoData === null) {
        <div>Cargando</div>
    }
    
    return (
        <div className="container-cart-general">
            {imgLoading && 
            <div className="esquelor">
                <div className="img"></div>
                <div className="title"></div>
                <div className="price"></div>
                <div className="botton"></div>
            </div>}
        <div className={`containerCart ${FireProductoData.outsold === true ? 'grey' : ''} ${!imgLoading && 'enabled'}`}>
            <EtiquetaCart tipo={FireProductoData.descuento_tipo} texto={FireProductoData.descuento_texto} outsold={FireProductoData.outsold} />
            <ImagenCart src={FireProductoData.src} alt={FireProductoData.title} SKU={FireProductoData['SKU']} setImgLoading={setImgLoading} />
            <p className='NombreProducto'>{FireProductoData.title}</p>
            <PrecioCart precio={FireProductoData.precio} precioDcto={FireProductoData.precioDscto} />
            <BotonCart AccionesBotones={AccionesBotones} dataProducto={FireProductoData} outsold={FireProductoData.outsold} />
        </ div >
        </div>
    )


}
export default ProductCart

