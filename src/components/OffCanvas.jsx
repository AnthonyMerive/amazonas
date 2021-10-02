import Offcanvas from 'react-bootstrap/Offcanvas'
import Login from './Login'
import Usuario from './Usuario'
import Register from './Register'

export default function OffCanvas(props) {

    return (<>

        <Offcanvas placement="start" show={props.show} onHide={() => props.setShow(false)}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
                {props.auth ?
                    <Usuario />
                    :
                    <Register />
                }

            </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas placement="end" show={props.showlog} onHide={() => props.setShowlog(false)}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>

                <Login />

            </Offcanvas.Body>
        </Offcanvas>

    </>)
}
