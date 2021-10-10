import { types } from "../types/types"

const initialState= []

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.register:

            return {
                uid: action.payload.uid,
                correo: action.payload.email,
                displayName: action.payload.displayName,

            }

        default:
            return state;
    }
}