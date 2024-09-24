import React, { useEffect, useState } from 'react'
import { categoria } from '../../data/categoria'
function useCategorias() {
    /**
     * Función que traer todas las categorías de la Base de Datos
     * @returns {Array<Object>} Array con los datos de las categorías
     */
    function TraerCategorias() {
        const cat = categoria
        setCategorias(cat)
    }
    function NombresCategorias(ArrayCategorias) {
        let nombres = []
        for (const categoria of ArrayCategorias) {
            nombres.push(categoria["Nombre"])
        }
        return (nombres)
    }


    const [categorias, setCategorias] = useState([])
    const nombres = NombresCategorias(categorias)

    useEffect(() => {
        TraerCategorias()
    }, [])

    return { categorias, nombres }
}

export default useCategorias
