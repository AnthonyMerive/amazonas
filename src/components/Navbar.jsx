import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Navbar.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import OffCanvas from './OffCanvas';

export default function Navbar(props) {

    let numProductos = 0;

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 1,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 1px',
            background: '#FF6A03'
        },
    }));

    const [show, setShow] = useState(false)
    const [showlog, setShowlog] = useState(false)

    return (<>
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <Link to="/"><img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1632962610/logo-amazon_gofix5.png" alt="" /></Link>
                <form className="d-flex col-4">
                    <input className="form-control me-1 " type="search" aria-label="Search" />
                    <button className="btn btn-outline-warning" type="submit"><SearchIcon /></button>
                </form>
                <div className="d-flex justify-content-end me-3">

                    <ul className="navbar-nav me-auto ms-5 mb-lg-0">
                        {!props.auth ?

                            <li className="nav-item">
                                <span onClick={() => setShow(true)} className={`nav-link active ${styles.register}`} aria-current="page"><AddIcon />REGISTRATE</span>
                                <span onClick={() => { setShowlog(true); setShow(false) }} className={`nav-link active ${styles.register}`} aria-current="page"><AccountCircleIcon sx={{ mr: 1 }} />INGRESA</span>
                            </li>

                            :
                            <li className="nav-item dropstart">
                                <span className="nav-link down-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <AccountCircleIcon className={styles.car} sx={{ color: "white", fontSize: "30px" }} />
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span style={{cursor: "pointer"}} onClick={() => setShow(true)} className="dropdown-item">Mi perfil</span></li>
                                    <li><span style={{cursor: "pointer"}} className="dropdown-item">Mis ventas</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span style={{cursor: "pointer"}} className="dropdown-item">Cerrar Sesion</span></li>
                                </ul>
                            </li>
                        }
                        <li className="nav-item">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={numProductos} color='primary' sx={{
                                    color: 'white'
                                }}>
                                    <ShoppingCartIcon className={styles.car} sx={{
                                        color: 'white',
                                        fontSize: "30px"
                                    }} />
                                </StyledBadge>
                            </IconButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <OffCanvas auth={props.auth} show={show} setShow={setShow} showlog={showlog} setShowlog={setShowlog} />
    </>)
}
