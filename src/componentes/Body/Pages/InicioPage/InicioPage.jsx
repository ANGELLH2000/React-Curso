import { useContext, useEffect } from 'react'
import SeccionCategorias from './components/SeccionCategorias'
import SeccionProducto from './components/SeccionProducto'
import './Inicio.css'
import { GlobalContext } from '../../../Context/Conntext'
import Inicio from './components/Inicio'
function InicioPage() {
    const { cambioPagina, dataCategorias, dataProductoMes } = useContext(GlobalContext)
    useEffect(() => {
        cambioPagina("Inicio")
    }, [])
    return (
        <div className='grid-container'>
            <div className="row1"></div>
            <Inicio/>
            <SeccionCategorias FireInfo={dataCategorias} />
            <div className="row3"></div>
            <SeccionProducto FireInfo={dataProductoMes} />
        </div>
    )
}

export default InicioPage
