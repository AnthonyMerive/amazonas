import { types } from '../types/types'
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { googleAuth } from '../firebase/firebaseConfig'

//autenticacion google

const auth = getAuth();

export const loginGoogle = () => {
    return (dispatch) => {
        signInWithPopup(
            auth,
            googleAuth
        )
            .then(({ user }) => {
                console.log(user)
            console.log(user.providerData[0])
                user = user.providerData[0];
                dispatch(loginSincrono(user.uid, user.displayName, user.phoneNumber, user.photoURL))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

//login google

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth,
            email,
            password
        ).then(({ user }) => {
            console.log(user)
            console.log(user.providerData[0])
            const data = user.providerData[0];
            dispatch(loginSincrono(user.uid, data.displayName, data.phoneNumber, data.photoURL))
        }).catch(error => {
            console.log(error)
        })
    }
}



export const loginSincrono = (uid, displayName, telefono, foto) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            telefono,
            foto
        }
    }
}