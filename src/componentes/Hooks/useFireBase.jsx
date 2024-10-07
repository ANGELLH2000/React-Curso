import { collection, getDocs, getFirestore, addDoc, query, where } from 'firebase/firestore'
import React, { useState } from 'react'

function useFireBase() {
    const [dataColeccion, setColeccion] = useState();
    const [dataProducto, setDataProducto] = useState();
    const [dataCategorias, setDataCategorias] = useState([]);
    const [dataProductoMes, setDataProductoMes] = useState([]);
    const [dataProductos, setDataProductos] = useState([]);
    const [fireLoading, setfireLoading] = useState(true)
    const db = getFirestore()
    //FireStore
    /**
     * Función asíncrona que traer la coleción pedida de FireBase
     * @param {String} NombreColeccion Nombre de la colección a buscar
     * @param {String} setData Nombre del setState que se tenga que cambiar, por defecto es setColeccion
     */
    async function traerColeccion(NombreColeccion, setData = null) {
        setfireLoading(true);
        const coleccion = collection(db, NombreColeccion)

        const snapshot = await getDocs(coleccion);
        const titulos = snapshot.docs.map((docu) => ({
            id: docu.id, // Extrae el id del documento
            ...docu.data() // Extrae los datos del documento
        }));
        if (setData !== null) {
            setData(titulos);
        } else {
            setColeccion(titulos);
            setfireLoading(false);
        }
    }
    /**
     * Función asíncrona que traer la coleción Categorias , Productos y ProductoMes de FireBase
     * y las setea en los States dataCategorias,dataProductoMes respectivamente
     */
    function traerInicio() {
        Promise.all([
            traerColeccion("Categorias", setDataCategorias),
            traerColeccion("ProductoMes", setDataProductoMes),
            traerColeccion("Items", setDataProductos)
        ]).then(() => {
            setfireLoading(false)
        })

    }

    function traerProducto(SKU) {
        setfireLoading(true)
        const docRef = query(collection(db, 'Items'), where('SKU', '==', Number(SKU)));
        return getDocs(docRef)
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    setDataProducto({id: snapshot.docs[0].id, ...snapshot.docs[0].data()})
                } else {
                    setDataProducto(null)
                }
                setfireLoading(false);
            })
            .catch((e) => console.log(e))
    }

    function cargarDoc(data, url) {
        // Asegúrate de devolver la promesa
        return addDoc(collection(db, 'Items'), {
            title: data['title'],
            description: data['description'],
            SKU: data['SKU'],
            src: url,
            descuento_tipo: data['descuento-tipo'],
            descuento_texto: data['descuento-texto'],
            precio: data.precio,
            precioDscto: data['precioDscto'],
            category: data['category'],
            agregados: data["agregados"]

        })
            .then((docRef) => {
                console.log('Documento escrito con ID: ', docRef.id);
            })
            .catch((e) => {
                console.error('Error al añadir el documento: ', e);
            });
    }

    return ({ traerColeccion, traerInicio, cargarDoc, traerProducto, dataColeccion, fireLoading, dataCategorias, dataProductos, dataProductoMes, dataProducto })
}

export default useFireBase
