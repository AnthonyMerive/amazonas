import * as React from 'react';
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import SellIcon from '@mui/icons-material/Sell';
import { useSelector } from 'react-redux';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { logout } from '../actions/actionLogin'
import { useDispatch } from 'react-redux';
import { registerSincrono } from '../actions/actionRegister';
import { fileUpload } from '../helpers/fileUpload';
import { addFoto } from '../actions/actionAddFoto'
import { IconButton } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffa703',
            main: '#ffa703',
            dark: '#FF6A03',
            contrastText: '#fff',
        },
    },
});

export default function Usuario(props) {

    const perfil = useSelector(store => store.login)
    const nuevoUsuario = useSelector(store => store.register)

    const dispatch = useDispatch()

    const handleCerrarSesion = () => {
        dispatch(logout());
        dispatch(registerSincrono());
        props.setShow(false)
        props.setShowlog(false)
        localStorage.clear();
    }

    const idPerfil = perfil.id;
    const idNuevoUsuario = nuevoUsuario.id;
    const fotoPerfil = perfil.foto;
    const [imgUrl, setImgUrl] = useState(fotoPerfil)

    useEffect(() => {
        if (fotoPerfil === null) {
            alert('cargue una foto de perfil')
        }
    }, [idPerfil, idNuevoUsuario, fotoPerfil])

    const handleActualizafoto = () => {
        document.getElementById('fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                setImgUrl(resp)
            })
            .catch(error => {
                console.log('Vuelva a cargar la imagen');
                console.log(error)
            })
    }

    useEffect(() => {
        dispatch(addFoto(imgUrl))
    }, [imgUrl, dispatch])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{
                            mb: 4
                        }}>
                        Perfil
                    </Typography>


                    {perfil.foto ?
                        <Avatar alt={perfil.displayName} src={`${perfil.foto}`}
                            sx={{ width: 80, height: 80 }} />
                        :
                        <div>
                            <input
                                id="fileSelector"
                                type="file"
                                name="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                            />
                            <IconButton aria-label="actualizaFoto">
                                <AddPhotoAlternateIcon
                                    onClick={handleActualizafoto}
                                    sx={{
                                        fontSize: "60px",
                                        color: "#131921"
                                    }} />
                            </IconButton>
                        </div>
                    }

                    <Box sx={{
                        mt: 1,

                    }}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    align='center'
                                    component="h2"
                                    variant="h6">
                                    {`${perfil.displayName}`}
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography
                                    align='center'
                                    component="h2"
                                    variant="subtitle1">
                                    {`${perfil.correo}`}
                                </Typography>
                            </Grid>

                            {/* <Grid item xs={12}>
                                <Typography
                                    align='center'
                                    component="h2"
                                    variant="subtitle1">
                                    {perfil.telefono ? `${perfil.telefono}` : 'Sin telefono registrado'}
                                </Typography>
                            </Grid> */}

                        </Grid>
                        <Grid container justifyContent="center">
                            <Button
                                size="small"
                                type="submit"
                                variant="outlined"
                                sx={{
                                    mt: 3,
                                    color: '#7E8284'
                                }}
                                endIcon={<SellIcon />}
                            >
                                <Link
                                    onClick={() => props.setShow(false)}
                                    to="/agregarProducto"
                                    style={{ textDecoration: 'none', color:'grey' }}
                                >
                                    Vender
                                </Link>

                            </Button>

                        </Grid>

                        <Grid container justifyContent="center">

                            <Button
                                onClick={handleCerrarSesion}
                                size="small"
                                type="submit"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2
                                }}
                                endIcon={<LoginIcon />}
                            >
                                <Link
                                    to="/"
                                    style={{ textDecoration: 'none', color:'white' }}
                                >
                                    cerrar sesion
                                </Link>
                            </Button>


                        </Grid>

                        <Grid container justifyContent="center"
                            sx={{
                                mt: 3,
                            }}>
                            <Grid item>
                                <Link to="/">
                                    ??Problemas con tu cuenta?
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Container >
        </ThemeProvider >
    );
}

