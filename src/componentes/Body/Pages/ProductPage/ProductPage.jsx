import { Navigate, useParams } from 'react-router-dom'
import Datos from './Datos'
import Imagenes from './Imagenes'
import './ProductPage.css'
import useProducto from '../../../Hooks/useProducto'
import { useEffect } from 'react'
import useFireBase from '../../../Hooks/useFireBase'
import Loader from '../../Loader/Loader'
function ProductPage({carritoHook}) {
    const {dataProducto,fireLoading,traerProducto}=useFireBase()
    const { SKU } = useParams()
    const { Buscar, infoProducto, loading } = useProducto()
    useEffect(() => {
        traerProducto(SKU)
        Buscar(SKU)
    }, [SKU,loading]); // Solo se ejecuta cuando cambia SKU o Buscar
    //console.log(dataProducto,fireLoading,"Aqui")

    if(fireLoading){
        return(
            <Loader/>
        )
    }
    if(dataProducto===null){//////Mejorar codigo para llevara a pagina de error
        return(
            <Navigate to="/Tienda"/>
        )
    }else{
        return (
            <>
                <div className="container-producto">
                    <Imagenes FireData={dataProducto} data={infoProducto} />
                    <Datos FireData={dataProducto} carritoHook={carritoHook}/>
                </div>
            </>
        ) 
    }   
}
export default ProductPage
