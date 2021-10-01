import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Categories from '../components/Categories';
import Productos from '../components/Productos';
import Navbar from '../components/Navbar'

export default function AppRoutes() {
    return (
        <Router>

            <Navbar />

            <Switch>

                <Route exact path="/" component={Categories} />

                <Route exact path="/categorias" component={Categories} />

                <Route exact path="/categorias/:categoria" component={Productos} />

            </Switch>

        </Router>
    )
}
