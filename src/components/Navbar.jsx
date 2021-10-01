import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Navbar.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function Navbar() {


    let auth = false;
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
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                <div className="container-fluid">
                    <Link to="/"><img src="https://res.cloudinary.com/df8qzqymf/image/upload/v1632962610/logo-amazon_gofix5.png" alt="" /></Link>
                    <form className="d-flex col-4">
                        <input className="form-control me-1 " type="search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit"><SearchIcon /></button>
                    </form>
                    <div className="d-flex justify-content-end me-3">

                        <ul className="navbar-nav me-auto ms-5 mb-lg-0">
                            {!auth ?
                                <li className="nav-item">
                                    <a className={`nav-link active ${styles.register}`} aria-current="page" href="#"><AddIcon />REGISTRATE</a>
                                </li>
                                :
                                <li className="nav-item dropstart">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <AccountCircleIcon className={styles.icon} sx={{color: "white", fontSize: "30px"}}/>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Mi perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Mis compras</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
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
        </>
    )
}
