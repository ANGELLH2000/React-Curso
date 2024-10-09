import { useContext, useEffect } from 'react'
import Mision from './components/Mision'
import Nosotros from './components/Nosotros'
import './NosotrosPage.css'
import { GlobalContext } from '../../../Context/Conntext'
function NosotrosPage() {
    const{cambioPagina}=useContext(GlobalContext)
    useEffect(()=>{
        cambioPagina("Nosotros")
    },[])
    return (
        <div className="container-NosotrosPage">
            <Nosotros/>
            <div className="row2"></div>
            <Mision/>
        </div>
    )
}

export default NosotrosPage
