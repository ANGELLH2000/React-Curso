import './ProductPage.css'
import { IoMdRemove, IoMdAdd } from "react-icons/io";
function SinStock(){
    return(
        <div className="botones sinStock">
            Agotado
        </div>
    )
}
function Stock({carritoHook,data}) {

    const{ExistenciaDeProducto,AgregarProducto,AumentarCantidad,RestarCantidad}=carritoHook
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
            {!existeProducto[0] && <><button onClick={()=>AgregarProducto(data)}>Agregar al carrito</button></>}
            {existeProducto[0] &&<><PlusAndLess  datas={data}/> <div className='noBotton'></div></>}
        </div>
    )
}
function BotonesCart({data, carritoHook}) {
    if(!data.outsold){
        return(<Stock carritoHook={carritoHook} data={data}/>)
    }else{
        return(<SinStock/>)
    }
}

export default BotonesCart
