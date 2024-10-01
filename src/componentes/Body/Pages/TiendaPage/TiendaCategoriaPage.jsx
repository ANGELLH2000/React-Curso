import './TiendaPage.css'
import useCategorias from "../../../Hooks/useCategorias"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import ListaProductos from "./componentes/ListaProductos";
import BarraCategorias from "./componentes/BarraCategorias"

function TiendaCategoriaPage({carritoHook,data}) {
    const { NombreCategoria } = useParams();
    const { categorias} = useCategorias()
    if(data.loading){
        return(<h1>Cargando</h1>)
    }
    if(data.dataProductos){
        return (
            <div  id='title' className="container-Tienda">
                <div  className="title">
                    <h2>{NombreCategoria}</h2>
                    <p className="links"><Link to="/Tienda">Tienda</Link> / <span>{NombreCategoria}</span></p>
                </div>
                <div className="container-productos">
                    <BarraCategorias categorias={categorias} NombreCategoria={NombreCategoria}/>
                    <ListaProductos carritoHook={carritoHook} NombreCategoria={NombreCategoria} data={data.dataProductos} />
                </div>
            </div>
        )
    }


    
}

export default TiendaCategoriaPage
