import TopCategory from "./TopCategory"
import './TiendaPage.css'
import useCategorias from "../../../Hooks/useCategorias"
import CategoriasTodas from "./CategoriasTodas"
import { useParams } from "react-router-dom";
import ListaProductos from "./ListaProductos";

function TiendaPage({carritoHook,data}) {
    const { NombreCategoria } = useParams();
    const { categorias} = useCategorias()
    if(data.loading){
        return(<h1>Cargando</h1>)
    }
    if(data.dataProductos){
        return (
            <div className="container-Tienda">
                <TopCategory categorias={categorias}/>
                <div className="container-productos">
                    <CategoriasTodas categorias={categorias} NombreCategoria={NombreCategoria}/>
                    <ListaProductos carritoHook={carritoHook} NombreCategoria={NombreCategoria} data={data.dataProductos} />
                </div>
            </div>
        )
    }


    
}

export default TiendaPage
