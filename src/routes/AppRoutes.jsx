import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Categories from '../components/Categories';
import Productos from '../components/Productos';
import Navbar from '../components/Navbar'
import Descripcion from '../components/Descripcion';

export default function AppRoutes() {

    const [auth, setAuth] = useState(true)
    
    return (
        <Router>

            <Navbar auth={auth}/>

            <Switch>

                <Route exact path="/" component={Categories} />

                <Route exact path="/categorias" component={Categories} />

                <Route exact path="/:categoria" component={Productos} />

                <Route exact path="/:categoria/:id" component={Descripcion} />

            </Switch>

        </Router>
    )
}
