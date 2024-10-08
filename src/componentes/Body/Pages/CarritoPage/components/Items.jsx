import React from 'react'
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function Items({data,botones}) {
    const{EliminarProducto,AumentarCantidad,RestarCantidad}=botones
    return (
        <div className='item'>
            <div className="data">
                <Link to={`/Tienda/Producto/${data.SKU}`}><img src={data.src} alt={data.title} /></Link>
                <div className="datos">
                    <h3>{data.title}</h3>
                    <p>Datos Adicionales</p>
                    {data.precioDscto && <><p className="pricedsct">S/. {data.precio}</p><p className="price">S/. {data.precioDscto}</p></>}
                    {!data.precioDscto && <p className="price">S/. {data.precio}</p>}
                </div>
            </div>
            <div className="botones">
                <IoMdRemove onClick={()=>RestarCantidad(data.SKU)}/>
                <p>{data.agregados}{data.agregados<2?` und`:` unds`}</p>
                <IoMdAdd onClick={()=>AumentarCantidad(data.SKU)}/>
            </div>
            <IoMdClose className='close-item' onClick={()=>EliminarProducto(data.SKU)}/>
        </div>
    )
}
export default Items
