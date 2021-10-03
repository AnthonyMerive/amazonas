import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {loginReducer} from '../reducers/loginReducer'
import {registerReducer} from '../reducers/registerReducer'
import { obtenerLocalStorage, guardarLocalStorage}from '../localStorage'
import thunk from 'redux-thunk';

// combina los reducer existentes
const reducers = combineReducers({
    //productos: productoReducer
    login: loginReducer,
    register: registerReducer
    //aca se agregarian los demas productos
    //como un objeto
})

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storageState = obtenerLocalStorage();

console.log(storageState)

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