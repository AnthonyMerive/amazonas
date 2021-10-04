import { Redirect, Route } from 'react-router'

const PrivateRoutes = ({component:Venta, ...rest}) => {
    
    return (

    <Route {...rest}>
        {rest.auth? 
           <Venta/> 
        :
        <Redirect to="/" />
        }
    </Route>

    )
}

export default PrivateRoutes