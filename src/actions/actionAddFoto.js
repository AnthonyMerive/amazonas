import { types } from '../types/types'
import { getAuth, updateProfile } from 'firebase/auth'

export const addFoto = async (foto) => {
    console.log(foto)
    const auth = getAuth();
    await updateProfile(auth.currentUser,{
        photoURL: foto,
     })
     return (dispatch) => {
        dispatch(actualizaLogin(foto))
     }
}

export const actualizaLogin = (pic) =>{
    return {
        type: types.actualiza,
        payload: pic
    }
}
