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
     * Esta función ayuda para tener un carrito con los ultimos productos agregados
     * Agregar al State(carrito) el resultado de la función {@link cargarCarrito}
     */
    function traerCarritoAlState() {
        const carritoLocal = cargarCarrito()
        carritoLocal.length > 0 ? setCarrito(carritoLocal) : setCarrito([])
    }
    /**
     * Retorna un arreglo con cantidad de productos en el carrito , la suma de precio totales y la cantidad de items agregados en el carrito
     * @param {Array<Object>} carrito Arreglo del carrito donde se hará los cálculos 
     * @returns {Array<Number,Number,Number>}Arreglo de 3 posiciones [0]=>Cantidad de Productos / [1]=>Suma total de precios /[2]=>Suma total Items
     */
    function CantProductsAndTotal(carrito) {
        let total = 0
        let totalItems = 0
        if (carrito.length > 0) {
            for (const producto of carrito) {
                let precioPorProducto=0
                producto.precioDscto?precioPorProducto=producto.precioDscto:precioPorProducto=producto.precio
                total = total + (precioPorProducto * producto.agregados)
                totalItems = totalItems + (producto.agregados)

            }
            total = Math.round(total * 100) / 100;
            return [carrito.length, total, totalItems]
        } return [0, total, totalItems]
    }
    /**
     * Función que Actualiza el LocaStorage con el nombre 'NombreLocalStorage', luego vuelve a crear el LocalStorage con el mismo nombre pero con la nueva 'Data' y por último
     * llama a la funcion {@link traerCarritoAlState} para actualizar el State
     * @param {Array} Data Arreglo que se ingresará en el LocalStorage 
     * @param {String} NombreLocalStorage Nombre del LocalStorage ques se eliminará y creará (por defecto = 'carrito')
     */
    function ActualizarLocalStorage(Data, NombreLocalStorage = 'carrito') {
        localStorage.setItem(NombreLocalStorage, JSON.stringify(Data))
        traerCarritoAlState()
    }
    /**
     * Función para eliminar un producto,guiándose del SKU para buscarlo en el carrito del LocalStorage.
     * Actualiza el useState del carrito
     * @param {String} SKU SKU del producto para buscar en el carrito del LocaStorage
     */
    function EliminarProducto(SKU) {
        /**
         * Devuelve un nuevo array pero sin el OBJ con el SKU indicado
         */
        const carro = cargarCarrito().filter(producto => producto['SKU'] != SKU)
        ActualizarLocalStorage(carro)
    }
    /**
     * Función para Aumentar la cantidad de un producto,guiándose del SKU para buscarlo en el carrito del LocalStorage.
     * Actualiza el useState del carrito
     * @param {String} SKU SKU del producto para buscar en el carrito del LocaStorage
     * @param {Number} cantidad Cantidad a Aumentar (por defecto = 1)
     */
    function AumentarCantidad(SKU, cantidad = 1) {
        const carro = cargarCarrito()
        for (const producto of carro) {
            if (producto['SKU'] === SKU) {
                producto.agregados += cantidad
            }
        }
        ActualizarLocalStorage(carro)
    }
    /**
     * Función para Restar la cantidad de un producto,guiándose del SKU para buscarlo en el carrito del LocalStorage. 
     * Si el producto es igual a la cantidad , entonces eliminará el producto.
     * Actualiza el useState del carrito
     * @param {String} SKU SKU del producto para buscar en el carrito del LocaStorage
     * @param {Number} cantidad Cantidad a Restar (por defecto = 1)
     */
    function RestarCantidad(SKU, cantidad = 1) {
        const carro = cargarCarrito()
        let eliminado = false
        for (const producto of carro) {
            if (producto['SKU'] === SKU) {
                if (producto.agregados === cantidad) {
                    eliminado = true
                    EliminarProducto(SKU)
                    break
                } else {
                    producto.agregados -= cantidad
                }
            }
        }
        !eliminado ? ActualizarLocalStorage(carro) : null

    }
    /**
     * Función para agregar un producto en el carrito del LocalStorage.
     * Actualiza el useState del carrito
     * @param {Object} Producto Objeto del Producto a agregar
     */
    function AgregarProducto(Producto) {
        const carritoLocal = cargarCarrito()
        Producto.agregados = 1
        carritoLocal.push(Producto)
        ActualizarLocalStorage(carritoLocal)

    }
    /**
     * Función que comprueba si existe el producto en el carrito usando el 'SKU' de referencia y retorna un Array de 2 posiciones [0]=>Valor de Existencia / [1]=> Cantidad de agregados en el carrito
     * @param {String} SKU SKU del producto para buscar en el carrito del LocaStorage
     * @returns {Array} Retorna [0]=> True o False en caso exista / [1]=> Cantidad de agregados en el carrito
     */
    function ExistenciaDeProducto(SKU) {
        const carritoLocal = cargarCarrito()
        for (const producto of carritoLocal) {
            if (producto['SKU'] === SKU) {
                return ([true,producto.agregados])
            }
        }
        return ([false,0])
    }

    const [carrito, setCarrito] = useState([])
    let cantAndTotal = CantProductsAndTotal(carrito)

    useEffect(() => {
        traerCarritoAlState()
    }, [])


    return { carrito, cantAndTotal, traerCarritoAlState, EliminarProducto, AumentarCantidad, RestarCantidad, AgregarProducto, ExistenciaDeProducto }
}


export default useCarrito