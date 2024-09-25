import { Navigate, useParams } from 'react-router-dom'
import Datos from './Datos'
import Imagenes from './Imagenes'
import './ProductPage.css'
import useProducto from '../../../Hooks/useProducto'
import { useEffect } from 'react'
function ProductPage({carritoHook}) {
    const { SKU } = useParams()
    const { Buscar, infoProducto, loading } = useProducto()
    useEffect(() => {
        Buscar(SKU)
    }, [SKU,loading]); // Solo se ejecuta cuando cambia SKU o Buscar

    if(loading){
        return(
            <p>Cargando</p>
        )
    }
    if(!infoProducto){
        return(
            <Navigate to="/Tienda"/>
        )
    }
    if(typeof(infoProducto.id)==="number"){
        return (
            <>
                <div className="container-producto">
                    <Imagenes data={infoProducto} />
                    <Datos data={infoProducto} carritoHook={carritoHook}/>
                </div>
            </>
        ) 
    }   
}
export default ProductPage
