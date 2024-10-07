import { createContext, useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import useFireBase from "../Hooks/useFireBase";
import Loader from "../Body/Loader/Loader";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [pagina, setPagina] = useState("Inicio");
    const [categoriasTitulosInfo, setCategoriasTitulosInfo] = useState([]);
    const{traerInicio,fireLoading,dataCategorias,dataProductos,dataProductoMes}=useFireBase()
    /**
     * Cambia el valor del State página del contexto
     * Se usar en el navbar para animarla la posicion de acuerdo a la página  
     * @param {String} lugar 
     */
    const cambioPagina = (lugar) => {
        setPagina(lugar)
    }
    useEffect(() => {
        traerInicio()
    }, [])

    
    if(fireLoading){
        return(<Loader/>)
    }
    const ExportarContexto = {
        pagina,
        dataCategorias,
        dataProductos,
        dataProductoMes,
        cambioPagina
    }
    return (
            <GlobalContext.Provider value={ExportarContexto}>
                {children}
            </GlobalContext.Provider>
        )
    
}

export default GlobalProvider
