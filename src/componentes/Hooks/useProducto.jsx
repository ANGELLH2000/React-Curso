import { useState, useEffect } from "react"
import useFetch from "./useFetch"

function useProducto() {
    const { dataProductos, loading } = useFetch()
    const [infoProducto, setInfoProducto] = useState([])
    /**
     * Función para actualizar el state 'dataProducto' con el producto actualizado y buscado por el SKU
     * @param {Number} SKU  SKU para buscar el producto
     */
    function Buscar(SKU) {
        if (!loading && dataProductos.length > 0) {
            let info = dataProductos.find((producto) => producto['SKU'] === Number(SKU));
            setInfoProducto(info?info:null)
        }



    }



    return { Buscar, infoProducto, loading }
}
export default useProducto
