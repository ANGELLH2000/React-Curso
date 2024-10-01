import { useEffect, useState } from "react";


function useFetch() {
    const [dataProductos, setDataProductos] = useState([])
    const [loading, setLoading] = useState(true);
    function FechtProducto() {
        console.log("QUE FUE?")
        fetch('/database.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la Respuesta")
                }
                return response.json()
            })
            .then(
                data => {
                    setDataProductos(data)
                    setLoading(false)
                }
            )
            .catch(error => {
                console.log("Hubo un error al obtener los datos", error)
                setLoading(false)
            })
    }
    useEffect(() => {
        FechtProducto();
    }, []);
    return { dataProductos, loading }
}

export default useFetch
