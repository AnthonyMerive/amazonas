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
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { loginEmailPassword } from '../actions/actionLogin'

export default function AppRoutes() {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [auth, setAuth] = useState(false)

    const autorizacion = getAuth()

    useSelector

    // useEffect(() => {
    //     onAuthStateChanged(autorizacion, (user) => {
    //         if (user?.uid) {
    //             dispatch(loginEmailPassword(user.uid, user.displayName))
    //             setAuth(true)
    //         } else {
    //             setAuth(false)
    //         }
    //         setChecking(false)
    //     })
    // }, [dispatch, setChecking, setAuth, autorizacion])

    // if (checking) {
    //     return (
    //         <h2>Cargando...</h2>
    //     )
    // }

    return (
        <Router>

            <Navbar auth={auth} />

            <Switch>

                <Route exact path="/" component={Categories} />

                <Route exact path="/categorias" component={Categories} />

                <Route exact path="/:categoria" component={Productos} />

                <Route exact path="/:categoria/:id" component={Descripcion} />

            </Switch>

        </Router>
    )
}
