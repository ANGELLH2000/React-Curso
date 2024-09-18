import { useEffect, useState } from 'react';

function useCarrito() {
    /**
 * Trae el carrito del localStorage con el nombre 'carrito'
 * @returns {Array <Object>} Carrito del LocalStorage o [] 
 */
    function cargarCarrito() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            return JSON.parse(carritoGuardado)
        }
        return []
    }
    /**
     * Comprueba que el 'Objeto' proporcionado tenga las 'Propiedades' mencionadas
     * @param {Object} obj  Objeto a corroborar 
     * @param {Array<String>} arraykeys Arreglo de nombres de las propiedades 
     * @returns {Boolean} Retorna True si es correcto o False si no corresponde con las propiedades
     */
    function comprobarkeys(obj, arraykeys) {
        const keysObjt = Object.keys(obj)
        return (arraykeys.every((elemento, index) => elemento === keysObjt[index]))

    }

    /**
     * Comprueba el 'Objeto' por completo incluido los sub objetos , con las 'Propiedades' proporcionadas
     * @param {Object} obj Objeto a Corroborar 
     * @param {Array<Array<String>,Array<String>>} arraykeys Arreglo de llaves para todo el objeto
     * @returns {Boolean} Retorna True si es correcto o False si no corresponde con las propiedades
     */
    function comprobarObjetoCompleto(obj, arraykeys) {
        let estado
        let posicion = 0
        if (estado = comprobarkeys(obj, arraykeys[0])) {
            for (let propiedad in obj) {
                if (typeof (obj[propiedad]) === "object") {
                    posicion++
                    if (estado = comprobarkeys(obj[propiedad], arraykeys[posicion])) {
                    } else {
                        break
                    }
                }
            }
        }
        return (estado)
    }
    /**
     * Modifica la cantidad del 'Producto'(obj) en el carrito en caso exista o Agrega el 'Producto'(obj) al carrito en caso no exista.
     * @param {Array} array Array donde se hace la busqueda
     * @param {Object} obj Producto que se va agregar en caso no exista en el Array
     * @param {String} SKU SKU del producto a buscar en el Array
     * @param {String} keyBuscado 'Propiedad' de cada 'Producto' en el array 
     * @param {String} keyBuscado2'Propiedad' de cada objeto de la 'Propiedad 1'(keyBuscado)  
     * @param {Number} cant Cantidad del producto(obj) que se va a agregar
     * @returns {Boolean} True si se Modifica  //  False si se Agrega
     */
    function comprobarCantidadEnObj(array, obj, SKU, keyBuscado, keyBuscado2, cant) {
        let estado = false
        array.length > 0 ? null : false
        for (const elemento of array) {
            if (elemento['SKU'] === SKU) {
                estado = true
                elemento[keyBuscado][keyBuscado2] += Number(cant)
            }
        }
        estado ? null : obj.estadoProducto.agregados = Number(cant)
        return (estado)

    }
    /**
     * Esta función ayuda para tener un carrito con los ultimos productos agregados
     * Agregar al State(carrito) el resultado de la función {@link cargarCarrito}
     */
    function traerCarritoAlState(){
        const carritoLocal = cargarCarrito()
        carritoLocal.length > 0 ? setCarrito(carritoLocal) : null
    }
    const [carrito, setCarrito] = useState([])

    
    const agregarProductoAlCarrito = (obj) => {
        //Traer carro

        //Comprobando los keys del objeto
        if (comprobarObjetoCompleto(obj, [['id', 'nombre', 'descuento', 'precio', 'descripcion', 'estadoProducto', 'scr', "SKU"], ["tipo", "texto"], ["precio", "precioDscto"], ["outsold", "agregados"]])) {
            //CARGAR AL CARRITO
            const carritoLocal = cargarCarrito()
            if (!comprobarCantidadEnObj(carritoLocal, obj, obj['SKU'], "estadoProducto", "agregados", 1)) {
                carritoLocal.push(obj)
            }
            localStorage.setItem('carrito', JSON.stringify(carritoLocal));
            setCarrito(carritoLocal)
            return (true)
        }
        return (false)
    }
    

    useEffect(() => {
        traerCarritoAlState()
    }, [])
    return { carrito, setCarrito, agregarProductoAlCarrito, traerCarritoAlState }
}


export default useCarrito