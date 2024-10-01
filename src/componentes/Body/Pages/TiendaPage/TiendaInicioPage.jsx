import useCategorias from '../../../Hooks/useCategorias'
import SeccionCategorias from './componentes/SeccionCategorias'
import SeccionProducto from './componentes/SeccionProducto'
import './TiendaPage.css'
let productoEstrella={
    "id": 1,
    "nombre": "Tacita de Café",
    "descuento": {
        "tipo": "dcto",
        "texto": "-10%"
    },
    "precio": {
        "precio": 5.99,
        "precioDscto": 5.39
    },
    "descripcion": "Taza de cerámica, 350ml.",
    "estadoProducto": {
        "outsold": false,
        "agregados": 0
    },
    "scr": "https://images.unsplash.com/photo-1468768649734-ddebcf0b0bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDE3NDR8MHwxfHNlYXJjaHwxfHxDb2ZmZWUlMjBNdWd8ZW58MHx8fHwxNzI0NjI0NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    "SKU": 2200201,
    "categoria": "Pastelería"
}
function TiendaInicioPage({carritoHook}) {
    const { categorias} = useCategorias()
    
    return (
        <div className='grid-container'>
            <div className="slider efecto2">
                <img src="/banner.jpg" alt="" />
            </div>
            <SeccionCategorias categorias={categorias}/>
            <SeccionProducto carritoHook={carritoHook} infoProducto={productoEstrella}/>
        </div>
    )
}

export default TiendaInicioPage
