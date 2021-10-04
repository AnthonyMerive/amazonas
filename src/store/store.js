import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {loginReducer} from '../reducers/loginReducer'
import {registerReducer} from '../reducers/registerReducer'
import {categoriasReducer} from '../reducers/categoriasReducer'
import {productosReducer} from '../reducers/productosReducer'
import { obtenerLocalStorage, guardarLocalStorage}from '../localStorage'
import thunk from 'redux-thunk';

// combina los reducer existentes
const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    categorias: categoriasReducer,
    productos: productosReducer
 
})

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerLocalStorage();

//creamos el store
export const store = createStore(
    reducers, //nuestros reducers combinados
    storageState, 
    composeEnhancers(
      applyMiddleware(thunk))
    
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //devtools de redux
)

// tomar datos del localStore o DB: (aplica para el ejercicio 2)
store.subscribe(()=>{
    guardarLocalStorage({
      login: store.getState().login
    })
  })