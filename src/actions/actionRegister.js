import { types } from '../types/types'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2';

export const registroEmailPasswordNombre = (name, email, password, foto) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,
            email,
            password
        ).then(async ({ user }) => {

            await updateProfile(auth.currentUser,{
               displayName: name,
            })

            dispatch(registerSincrono(user.uid, user.displayName, user.email))
            
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Datos invalidos',
                text: 'Intentelo de nuevo',
                showConfirmButton: false,
                timer: 2000
              })
        })

    }
}


export const registerSincrono = (uid, displayName, email) => {
    return {
        type: types.register,
        payload: {
            uid,
            displayName,
            email,
        }
    }
}