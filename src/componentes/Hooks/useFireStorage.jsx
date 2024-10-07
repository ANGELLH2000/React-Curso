import React from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../main'
function useFireStorage() {
    // Subir la imagen directamente desde la carpeta local del proyecto

    // Función para subir la imagen y devolver la URL
    const SubirImagen = (urlImgLocal, nombre) => {
        return new Promise((resolve, reject) => {
            // Acceder a la imagen desde la carpeta local
            fetch(urlImgLocal)
                .then(res => res.blob()) // Convertir la imagen a Blob
                .then((blob) => {
                    const imageRef = ref(storage, `Items/${nombre}.webp`); // Referencia en Firebase Storage

                    // Subir la imagen Blob a Firebase Storage
                    uploadBytes(imageRef, blob).then((snapshot) => {
                        console.log('Imagen subida:', snapshot);

                        // Obtener la URL de descarga de la imagen subida
                        getDownloadURL(snapshot.ref).then((downloadURL) => {
                            console.log('URL de la imagen:', downloadURL);
                            resolve(downloadURL); // Devolver la URL como resultado
                        }).catch((error) => reject(error)); // Manejo de errores al obtener la URL
                    }).catch((error) => reject(error)); // Manejo de errores al subir la imagen
                })
                .catch(error => reject(error)); // Manejo de errores al convertir la imagen en Blob
        });
    };


    return ({ SubirImagen })
}

export default useFireStorage
