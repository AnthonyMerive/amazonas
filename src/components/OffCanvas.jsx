import Offcanvas from 'react-bootstrap/Offcanvas'
import Login from './Login'
import Usuario from './Usuario'
import Register from './Register'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function OffCanvas(props) {

    const usuarioRegistrado = useSelector(store => store.register)
    const show = props.setShow;
    const showlog = props.setShowlog;
 
        useEffect(() => {
            usuarioRegistrado&&
            show(false);
            showlog(true);
            
        }, [usuarioRegistrado, show, showlog])

    return (<>

        <Offcanvas placement="start" show={props.show} onHide={() => props.setShow(false)}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
                {props.auth ?
                    <Usuario setShowlog={props.setShowlog} setShow={props.setShow} />
                    :
                    <Register />
                }

            </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas placement="end" show={props.auth?false:props.showlog} onHide={() => props.setShowlog(false)}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>

                <Login />

            </Offcanvas.Body>
        </Offcanvas>

    </>)
}
