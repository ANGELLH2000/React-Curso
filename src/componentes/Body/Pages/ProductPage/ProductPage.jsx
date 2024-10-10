import { Navigate, useParams } from 'react-router-dom'
import Datos from './Datos'
import Imagenes from './Imagenes'
import './ProductPage.css'
import { useEffect } from 'react'
import useFireBase from '../../../Hooks/useFireBase'
import Loader from '../../Loader/Loader'
function ProductPage() {
    const { SKU } = useParams()
    
    const {dataProducto,fireLoading,traerProducto}=useFireBase()
    useEffect(() => {
        traerProducto(SKU)
    }, [SKU]); // Solo se ejecuta cuando cambia SKU o Buscar
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
                    <Imagenes FireData={dataProducto} />
                    <Datos FireData={dataProducto}/>
                </div>
            </>
        ) 
    }   
}
export default ProductPage
