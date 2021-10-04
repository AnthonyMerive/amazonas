import { addDoc, collection, getDocs, } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { typesProductos } from '../types/types'

export const mostrarProductoAsincronico = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "productos"));
        const productos = [];
        datos.forEach((document) => {
            productos.push({
                ...document.data()
            })
        })
        dispatch(mostrarProductoSincrono(productos))
    }
}

export const mostrarProductoSincrono = (productos) => {
    return {
        type: typesProductos.mostrar,
        payload: productos
    }
}

export const addProductoAsincrono = (nombre, categoria, descripcion, precio, envioGratis, contacto, id, imagenes) => {
    return (dispatch) => {

        const newProduct = {
            nombre,
            categoria,
            descripcion,
            precio,
            envioGratis,
            contacto,
            id,
            imagenes
        }

        addDoc(collection(db, "productos"), newProduct)
            .then(resp => {
                dispatch(addProductoSincrono(newProduct))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const addProductoSincrono = (productos) =>{
    return {
        type: typesProductos.agregar,
        payload: productos
    }
}