import useCategorias from '../../../Hooks/useCategorias'
import SeccionCategorias from './components/SeccionCategorias'
import SeccionProducto from './components/SeccionProducto'
import './Inicio.css'
function InicioPage({carritoHook}) {
    const { categorias} = useCategorias()
    
    return (
        <div className='grid-container'>
            <div className="slider efecto2">
                <img src="/banner.jpg" alt="" />
            </div>
            <SeccionCategorias categorias={categorias}/>
            <SeccionProducto />
        </div>
    )
}

export default InicioPage
