import { collection, getDocs, } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import {typesCategorias} from '../types/types'

export const mostrarAsincronico = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "categorias"));
        const categorias = [];
        datos.forEach((document) => {
            categorias.push({
                    ...document.data()
            })
        })
        dispatch(mostrarSincrono(categorias))
    }
}

export const mostrarSincrono = (categorias) => {
    return {
        type: typesCategorias.mostrar,
        payload: categorias
    }
}

