import '../CarritoLateral/CarritoLateral.css'
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Navigate, useNavigate } from 'react-router-dom';
function CartProduct({ dataProducto, EliminarProducto, AumentarCantidad, RestarCantidad ,cerrar}) {
    const navigate=useNavigate()
    const click =() =>{
        navigate(`/Tienda/Producto/${dataProducto.SKU}`)
        cerrar()
        
    }
    return (
        <div className='cart-product'>
            <div className='img' onClick={click}>
                <img src={dataProducto.src} alt={dataProducto.title} />
            </div>
            <div className='datos'>
                <div className="close" onClick={() => EliminarProducto(dataProducto['SKU'])}><IoMdClose /></div>
                <div className="textos">
                    <p className={`${(dataProducto.title).length > 15 ? 'title-xl' : ''}`}>{dataProducto.title}</p>
                    <p className='c-707070'>Datos adicional</p>
                    {dataProducto.precioDscto && (
                        <div className='precios'>
                            <p className='c-707070 line-through'>S/. {dataProducto.precio}</p>
                            <p className='c-B16927'>S/. {dataProducto.precioDscto}</p>
                        </div>)
                    }
                    {!dataProducto.precioDscto && (
                        <div className='precios'>
                            <br />
                            <p className='c-B16927'>S/. {dataProducto.precio}</p>
                        </div>)
                    }
                    
                </div>
                <div className='cart-bottons'>
                    <button onClick={() => RestarCantidad(dataProducto['SKU'])}><IoMdRemove /></button>
                    <p>{dataProducto.agregados > 1 ? dataProducto.agregados + " Unidades" : dataProducto.agregados + " Unidad"}</p>
                    <button onClick={() => AumentarCantidad(dataProducto['SKU'])}><IoMdAdd /></button>
                </div>

            </div>
        </div>
    )
}
export default CartProduct