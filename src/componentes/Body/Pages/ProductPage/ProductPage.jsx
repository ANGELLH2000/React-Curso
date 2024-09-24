import { useParams } from 'react-router-dom'
import Datos from './Datos'
import Imagenes from './Imagenes'
import './ProductPage.css'
import useProducto from '../../../Hooks/useProducto'
import { useEffect } from 'react'
function ProductPage() {
    const { SKU } = useParams()
    console.log("Este es tu SKU:", SKU)
    const { Buscar, infoProducto, loading } = useProducto()
    useEffect(() => {
        Buscar(SKU)
    }, [SKU,loading]); // Solo se ejecuta cuando cambia SKU o Buscar
    console.log(infoProducto)

    return (
        <>
            <div className="container-producto">
                <Imagenes data={infoProducto} />
                <Datos data={infoProducto} />
            </div>
        </>
    )

}

export default ProductPage
