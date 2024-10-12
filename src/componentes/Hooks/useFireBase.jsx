import { collection, getDocs, getFirestore, addDoc, query, where } from 'firebase/firestore'
import React, { useState } from 'react'

function useFireBase() {
    const [dataColeccion, setColeccion] = useState();
    const [dataProducto, setDataProducto] = useState();
    const [dataCategorias, setDataCategorias] = useState([]);
    const [dataProductoMes, setDataProductoMes] = useState([]);
    const [dataProductos, setDataProductos] = useState([]);
    const [dataPedido, setDataPedido] = useState({Existencia:false});
    const [fireLoading, setfireLoading] = useState(true);
    const [firePedidoLoading, setFirePedidoLoading] = useState(false);
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
    /**
     * Función asíncrona que traer un Doc de la Colección:Items de FireBase usando el SKU para buscarlo.
     * @param {*} SKU 
     * @returns 
     */
    function traerProducto(SKU) {
        setfireLoading(true)
        const docRef = query(collection(db, 'Items'), where('SKU', '==', Number(SKU)));
        return getDocs(docRef)
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    setDataProducto({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() })
                } else {
                    setDataProducto(null)
                }
                setfireLoading(false);
            })
            .catch((e) => console.log(e))
    }
    /**
     * Función para crear ID de 10 caracteres para los Pedidos (Para poder mandar por WhatsApp)
     * @returns Retorna un String con la cadena del ID
     */
    /**
     * Función asíncrona que traer un Doc de la Colección:Pedidos de FireBase usando el ID para buscarlo.
     * @param {*} SKU 
     * @returns 
    */
    function traerPedido(ID) {
        const docRef = query(collection(db, 'Pedidos'), where('IdPedido', '==', ID));
        return getDocs(docRef)
            .then((snapshot) => {
                if (snapshot.size > 0) {
                    setDataPedido({ Existencia:true,id: snapshot.docs[0].id, ...snapshot.docs[0].data() })
                    return true
                } else {
                    setDataPedido({Existencia:false})
                    return true
                }
                //setfireLoading(false);
            })
            .catch((e) => 
            {
                console.log(e)
                setDataPedido({Existencia:false})
                return true
            })
    }
    function generarID() {
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return id;
    }
    /**
     * Función para evaluar si la ID de 10 caracteres para los Pedidos existe o no
     * True=>Existe o hubo un error  False=>NoExiste
     * @param {String} id   Id Generado  
     */
    function ComprobarID_Unico(id) {
        const docRef = query(collection(db, 'Pedidos'), where('IdPedido', '==', id));
        return getDocs(docRef)
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    //console.log("Existe")
                    return (true)
                } else {
                    //console.log("No Existe")
                    return (false)
                }
            })
            .catch((error) => {
                console.log("Error en la comprobación del Id con FireBase")
                return (true)
            });
    }
    /**
     * Función para crear ID de 10 caracteres para los Pedidos comprobando que no exista en Firebase,
     * en caso exista se realiza 5 intentos para obtener un único ID
     * @returns {Boolean} True or False
     */
    function Mi_IDPedido_Unico() {

        let contador = 0

        const Comprobando = () => {
            let ID = generarID()
            return ComprobarID_Unico(ID)
                .then((resp) => {
                    if (!resp) {
                        //console.log("ID Generado correctamente");
                        return ID
                    } else {
                        //console.log("El ID ya existe");
                        contador += 1
                        if (contador <= 2) {
                            // Si aún no has intentado dos veces, vuelve a intentarlo
                            //console.log("Intentando generar un nuevo ID");
                            return Comprobando(); // Llamar recursivamente la función
                        } else {
                            // Después de dos intentos, se detiene
                            return false;
                        }

                    }

                })
                .catch((error) => {
                    console.error("Error en la comprobación de ID:", error);
                    return false
                });

        }
        return Comprobando()
    }
    /**
     * Función para crear el pedido en Firebase, con los datos del Formulario.
     * Usa setFirPedidoLoading para indicar el estado de la carga y posble error
     * firPedidoLoading => [[Carga: True=> cargando / False=>fin de la carga]]
     * @param {*} DatosParaPedido 
     */
    function Crear_Pedido(DatosParaPedido) {
        setFirePedidoLoading(true)
        const Productos = DatosParaPedido[0].map((producto) => {
            return (
                {
                    'SKU': producto.SKU,
                    'Title': producto.title,
                    'Precio': producto.precio,
                    'Descuento': producto.precioDscto,
                    'Cantidad': producto.agregados
                }
            )
        })
        const Costos = {
            'Total': DatosParaPedido[1][1],
            'Envio': `${DatosParaPedido[2].Entrega == "Entrega en Tienda" ? 'Costo por confirmar' : 'Gratis'}`,
            'Confirmacion': DatosParaPedido[2].Entrega == "Entrega en Tienda" ? true : false
        }
        const Cliente = {
            'Nombre': DatosParaPedido[2].Nombre,
            'Correo': DatosParaPedido[2].Correo,
            'WhatsApp': DatosParaPedido[2].WhatsApp
        }
        const Entrega = {
            'Tipo': DatosParaPedido[2].Entrega,
            'Direccion': `${DatosParaPedido[2].Entrega == "Entrega en Tienda" ? '' : DatosParaPedido[2].Direccion}`
        }
        const Comentario = DatosParaPedido[2].Comentario

        return Mi_IDPedido_Unico()
            .then((u) => {
                if (u != false) {
                    const data = {
                        IdPedido: u,
                        Productos,
                        Costos,
                        Cliente,
                        Entrega,
                        Comentario
                    };
                    //console.log(data)
                    // Accedemos a la colección 'Pedidos' y agregamos un documento
                    return addDoc(collection(db, "Pedidos"), data)
                        .then((docRef) => {
                            //console.log("Documento añadido con ID: ", docRef.id, firePedidoLoading);
                            setFirePedidoLoading(false)
                            return u
                        })
                        .catch((error) => {
                            //console.error("Error al añadir documento: ", error);
                            setFirePedidoLoading(false)
                            return 0
                        });
                } else {
                    //console.log("No se logró crear el pedido")
                    setFirePedidoLoading(false)
                    return 0

                }

            })
            .catch((error) => {
                console.error("Error en el proceso de generar el ID del pedido:", error);
                return 0;
            });

    }

    return ({ 
        traerColeccion, 
        traerInicio, 
        traerProducto,
        traerPedido, 
        Crear_Pedido, 
        setFirePedidoLoading, 
        dataColeccion, 
        fireLoading, 
        dataCategorias, 
        dataProductos, 
        dataPedido,
        dataProductoMes, 
        dataProducto, 
        firePedidoLoading })
}

export default useFireBase
