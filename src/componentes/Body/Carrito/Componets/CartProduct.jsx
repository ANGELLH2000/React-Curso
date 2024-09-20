import '../CarritoLateral/CarritoLateral.css'
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
function CartProduct({ dataProducto , EliminarProducto,AumentarCantidad,RestarCantidad}) {
    return (
        <div className='cart-product'>
            <a href='#' className='img'>
                <img src={dataProducto.scr} alt={dataProducto.descripcion} />
            </a>
            <div className='datos'>
                <div className="close" onClick={()=>EliminarProducto(dataProducto['SKU'])}><IoMdClose /></div>
                <div className="textos">
                    <p className={`${(dataProducto.nombre).length>15?'title-xl':''}`}>{dataProducto.nombre}</p>
                    <p className='c-707070'>Datos adicional</p>
                    <div className="precios">
                        {dataProducto.precio.precioDscto && <p className='c-707070 line-through'>S/. {dataProducto.precio.precioDscto}</p>||<br/>}
                        <p className='c-B16927'>S/. {dataProducto.precio.precio}</p>
                    </div>
                </div>
                <div className='cart-bottons'>
                    <button onClick={()=>RestarCantidad(dataProducto['SKU'])}><IoMdRemove /></button>
                    <p>{dataProducto.estadoProducto.agregados>1?dataProducto.estadoProducto.agregados + " Unidades":dataProducto.estadoProducto.agregados + " Unidad"}</p>
                    <button onClick={()=>AumentarCantidad(dataProducto['SKU'])}><IoMdAdd /></button>
                </div>

            </div>
        </div>
    )
}
export default CartProduct