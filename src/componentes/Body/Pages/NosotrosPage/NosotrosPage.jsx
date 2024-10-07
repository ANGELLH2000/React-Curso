import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../Context/Conntext"
import useFireBase from "../../../Hooks/useFireBase"
import useFireStorage from "../../../Hooks/useFireStorage"
import { nuevosProductos } from "../../../../data/data"


function NosotrosPage() {
    const { cargarDoc } = useFireBase()
    const { SubirImagen } = useFireStorage()
    const { cambioPagina } = useContext(GlobalContext)
    useEffect(() => {
        cambioPagina("Nosotros")

    }, [])

    let producto = nuevosProductos


    function juan(index = 0) {
        if (index < producto.length) {

            SubirImagen(producto[index].src, producto[index].SKU)
            .then((urlImg)=>{
                cargarDoc(producto[index],urlImg)
                .then(() => {
                    console.log("Producto cargado title: ", producto[index].title)
                    juan(index + 1);
                })
                .catch((error) => {
                    console.error(`Error al subir el producto ${producto[index].title}:`, error);

                    // Continuar con el siguiente producto aunque ocurra un error
                    juan(index + 1);
                })})
            .catch((error)=>console.log("NO se subio nada",error))
            



        } else {
            console.log('Todos los productos fueron subidos');
        }

    }


    return (
        <>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <button onClick={() => juan()}>Subir</button>
        </>
    )
}

export default NosotrosPage
