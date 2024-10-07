import { useContext, useEffect } from 'react'
import SeccionCategorias from './components/SeccionCategorias'
import SeccionProducto from './components/SeccionProducto'
import './Inicio.css'
import { GlobalContext } from '../../../Context/Conntext'
function InicioPage() {
    const { cambioPagina, dataCategorias, dataProductoMes } = useContext(GlobalContext)
    useEffect(() => {
        cambioPagina("Inicio")
    }, [])
    return (
        <div className='grid-container'>
            <div className="slider efecto2">
                <img src="/banner.jpg" alt="" />
            </div>
            <SeccionCategorias FireInfo={dataCategorias} />
            <SeccionProducto FireInfo={dataProductoMes} />
        </div>
    )
}

export default InicioPage
