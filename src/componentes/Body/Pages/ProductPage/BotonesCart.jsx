import { useContext } from 'react';
import { GlobalContext } from '../../../Context/Conntext';
import './ProductPage.css'
import { IoMdRemove, IoMdAdd } from "react-icons/io";
function SinStock(){
    return(
        <div className="botones sinStock">
            Agotado
        </div>
    )
}
function Stock({data}) {
    const{carritoHook:{ExistenciaDeProducto,AgregarProducto,AumentarCantidad,RestarCantidad},navbar_tools:{visibleCart,openCart}}=useContext(GlobalContext)
    console.log("JAJAJAJ",visibleCart)
    let existeProducto=ExistenciaDeProducto(data.SKU)
    function PlusAndLess(){
        return(
        <div className='operadores'>
            <div onClick={()=>RestarCantidad(data.SKU)} className="boton"><IoMdRemove/></div>
            <p>{existeProducto[1]}</p>
            <div onClick={()=>AumentarCantidad(data.SKU)} className="boton"><IoMdAdd/></div>
        </div>)
    }
    
    return (
        <div className="botones">
            {!existeProducto[0] && <><button className='agregar' onClick={()=>AgregarProducto(data)}>¡Sí, lo quiero!</button></>}
            {existeProducto[0] &&<><div className='noBotton'><PlusAndLess datas={data}/> </div></>}
            {<button className={`Ver-Carrito ${existeProducto[0]? 'pricipal':''}`} onClick={openCart} disabled={visibleCart}>Ver Carrito</button>}
        </div>
    )
}
function BotonesCart({data}) {
    if(!data.outsold){
        return(<Stock data={data}/>)
    }else{
        return(<SinStock/>)
    }
}

export default BotonesCart
