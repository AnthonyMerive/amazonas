import { types } from "../types/types"

export const registerReducer = (state = {}, action) => {
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