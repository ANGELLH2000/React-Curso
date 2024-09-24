import './ItemListContainer.css'
import useCategorias from '../../Hooks/useCategorias'
import {useParams } from 'react-router-dom'
import ItemListCategorias from './ItemListCategorias'
import ItemListProductos from './ItemListProductos'


function ItemListContainer({ gretting, carritoHook, categoria }) {
    const { NombreCategoria } = useParams();
    const { categorias, nombres } = useCategorias()
    const { carrito, AumentarCantidad, RestarCantidad, AgregarProducto, ExistenciaDeProducto } = carritoHook
    const AccionesBotones = {
        carrito,
        AgregarProducto,
        AumentarCantidad,
        RestarCantidad,
        ExistenciaDeProducto
    }
    if (nombres.length > 0) {
        return (
            <>
                <h3>{gretting}</h3>
                <div className='contenedor '>{/* agregar contenedor-stop cuando se abra el carrito*/}
                    {categoria ? <ItemListCategorias categorias={categorias} /> : <ItemListProductos AccionesBotones={AccionesBotones} categorias={nombres} param={NombreCategoria} />}
                </div>
            </>
        )
    } else {
        <>
        </>
    }
}

export default ItemListContainer