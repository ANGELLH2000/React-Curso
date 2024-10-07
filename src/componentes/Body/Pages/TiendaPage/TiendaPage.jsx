import './TiendaPage.css'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import ListaProductos from "./components/ListaProductos";
import BarraCategorias from "./components/BarraCategorias"
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../Context/Conntext';
import useFireBase from '../../../Hooks/useFireBase';
import Loader from '../../Loader/Loader';

function TiendaPage({carritoHook}) {
    const{cambioPagina,dataCategorias,dataProductos}=useContext(GlobalContext)
    const { NombreCategoria } = useParams();
    const navigate =useNavigate()
    let error=true
    if(NombreCategoria!=="Todo"){
        dataCategorias.map((categoria)=>{
            categoria.title==NombreCategoria?error=false:null      
        })
    }else{
        error=false
    }
    
    useEffect(()=>{
        cambioPagina("Tienda")
    },[])

    if(error){
        navigate('/Error')
    }

    if(!dataProductos){
        return(<Loader/>)
    }
    if(dataProductos){
        return (
            <div  id='title' className="container-Tienda">
                <div  className="title">
                    <h2>{NombreCategoria}</h2>
                    <p className="links"><Link to="/Tienda/Categoria/Todo">Tienda</Link> / <span>{NombreCategoria}</span></p>
                </div>
                <div className="container-productos">
                    <BarraCategorias FireCategoria={dataCategorias} NombreCategoria={NombreCategoria}/>
                    <ListaProductos carritoHook={carritoHook} NombreCategoria={NombreCategoria}  FireData={dataProductos}/>
                    
                </div>
            </div>
        )
    }


    
}

export default TiendaPage
