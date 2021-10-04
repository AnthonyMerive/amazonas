import { typesProductos } from "../types/types";

const initialState = {
    productos: []
}

export const productosReducer = (state = initialState, action) => {
    switch (action.type) {

        case typesProductos.mostrar:
            return {
                productos: [...action.payload]
            };

        case typesProductos.agregar:
            return {
                productos: [...state.productos, action.payload]
            }

        default:
            return state;
    }
}