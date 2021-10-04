import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, MenuItem, Radio, RadioGroup, TextareaAutosize } from '@mui/material';
import { useSelector } from 'react-redux';
import { FormLabel } from 'react-bootstrap';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { fileUpload } from '../helpers/fileUpload';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { uid } from 'uid'
import { addProductoAsincrono } from '../actions/actionProductos';
import Swal from 'sweetalert2';

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

export default function AgregarProducto() {

    const { categorias } = useSelector(store => store.categorias)
    const perfil = useSelector(store => store.login)
    const [imgUrl, setImgUrl] = React.useState('')
    const dispatch = useDispatch()
    const imagen = [imgUrl]

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        categoria: '',
        descripcion: '',
        precio: '',
        envioGratis: false,
        contacto: perfil.correo,
        id: uid(),
    })

    let { nombre, categoria, descripcion, precio, envioGratis, id, contacto } = values;

    const handleEnviar = () => {
        dispatch(addProductoAsincrono(
            nombre,
            categoria,
            descripcion,
            parseInt(precio),
            envioGratis,
            contacto,
            id,
            imagen))
        reset();
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado con exito',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click();

    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(resp => {
                setImgUrl(resp);
                Swal.fire({
                    title: 'Subiendo Foto',
                    text: 'Espere por favor...',
                    timer: 3000,
                    timerProgressBar: true, 
                    showConfirmButton: false,
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo cargar la imagen',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <FormGroup >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Avatar sx={{
                            m: 1,
                            bgcolor: '#ffa703',
                            width: "60px",
                            height: "60px"
                        }}
                        >
                            {/* incono */}
                            <AddBusinessIcon
                                sx={{
                                    fontSize: "40px",
                                    color: "#131921"

                                }} />

                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Publicar Producto
                        </Typography>

                        <Box
                            component="form"
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                required
                                margin="normal"
                                fullWidth
                                type="text"
                                label="Nombre del Producto"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                                autoFocus
                            />
                            <TextField
                                required
                                sx={{ mt: 1 }}
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Categoria"
                                name="categoria"
                                value={categoria}
                                onChange={handleInputChange}
                                helperText="Selecciona una categoria"
                            >
                                {categorias.map((option) => (
                                    <MenuItem key={option.nombre} value={option.nombre}>
                                        {option.nombre}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextareaAutosize
                                fullWidth
                                placeholder="Descripcion del producto"
                                style={{ width: 400 }}
                                name="descripcion"
                                value={descripcion}
                                onChange={handleInputChange}
                            />
                            <input
                                id="fileSelector"
                                type="file"
                                name="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                            />
                            <TextField
                                required
                                disabled
                                id="outlined-disabled"
                                label="Foto del producto"
                                value={imgUrl}
                                variant="filled"
                                size="small"
                                sx={{ width: "35ch", ml: 2, mt: 2 }}
                            />
                            <IconButton aria-label="actualizaFoto">
                                <AddPhotoAlternateIcon
                                    onClick={handlePictureClick}
                                    sx={{
                                        mt: 1,
                                        fontSize: "45px",
                                        color: "#131921"
                                    }} />
                            </IconButton>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Precio"
                                    id="outlined-start-adornment"
                                    sx={{ mt: 1, ml: 2, width: "20ch" }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                    name="precio"
                                    value={precio}
                                    onChange={handleInputChange}
                                />

                                <FormControl sx={{ ml: 5 }} component="fieldset">
                                    <FormLabel component="legend">¿Envio Gratis?</FormLabel>
                                    <RadioGroup
                                        aria-label="envioGratis"
                                        name="envioGratis"
                                        value={envioGratis}
                                        onChange={handleInputChange}
                                    >
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                            <FormControlLabel value={true} control={<Radio />} label="Si" />
                                            <FormControlLabel value={false} control={<Radio />} label="No" />
                                        </Box>
                                    </RadioGroup>
                                </FormControl>

                            </Box>
                            <Button
                                type="Button"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    mb: 2
                                }}
                                onClick={handleEnviar}
                            >
                                Publicar

                            </Button>
                        </Box>

                    </Box>
                </FormGroup>

            </Container>

        </ThemeProvider>
    );
}

