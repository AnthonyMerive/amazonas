import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoutes = ({component:Venta, ...rest}) => {
    
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

    <Route {...rest}>
        {auth? 
           <Venta/> 
        :
        <Redirect to="/" />
        }
    </Route>

    )
}

export default PrivateRoutes