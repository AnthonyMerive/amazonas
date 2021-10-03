import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Categories from '../components/Categories';
import Productos from '../components/Productos';
import Navbar from '../components/Navbar'
import Descripcion from '../components/Descripcion';
import { useSelector } from 'react-redux';
import AgregarProducto from '../components/AgregarProducto'
// import { getAuth, onAuthStateChanged } from '@firebase/auth';
// import { loginEmailPassword } from '../actions/actionLogin'
import PrivateRoutes from './PrivateRoutes';

export default function AppRoutes() {

    // const dispatch = useDispatch();
    // const [checking, setChecking] = useState(true)
    const [auth, setAuth] = useState(false)

    // const autorizacion = getAuth()

    const usuarioLogeado = useSelector(store => store.login)

    useEffect(() => {
        usuarioLogeado.uid ?
            setAuth(true)
            :
            setAuth(false)
    }, [usuarioLogeado])


    return (
        <Router>

            <Navbar auth={auth} />

            <Switch>

                <Route exact path="/" component={Categories} />

                <PrivateRoutes exact path="/addProducto" component={AgregarProducto} /> 

                <Route exact path="/categorias" component={Categories} />

                <Route exact path="/:categoria" component={Productos} />

                <Route exact path="/:categoria/:id" component={Descripcion} />

                

            </Switch>

        </Router>
    )
}
