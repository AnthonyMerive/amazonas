import { typesCategorias } from "../types/types";

const initialState = {
    categorias: []
}

export const categoriasReducer = (state = initialState, action) => {
    switch (action.type) {

        case typesCategorias.mostrar:
            return {
                categorias: action.payload
            };


        default:
            return state;
    }
}