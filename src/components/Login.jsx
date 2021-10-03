import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { loginEmailPassword, loginGoogle } from '../actions/actionLogin'
import { useSelector } from 'react-redux';

//Funcion Copyright:

function Copyright(props) {
  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/AnthonyMerive/amazonas">
        Amazonas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

}

//---------------------------

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

export default function Login() {

  const usuarioRegistrado = useSelector(store => store.register)

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: ''
  })

  let { email, password } = values;

  if (usuarioRegistrado.uid) {
    email = usuarioRegistrado.correo;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password))
    reset();
  }

  const handleGoogle = () => {
    dispatch(loginGoogle(email, password))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

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
            <PersonIcon
              sx={{
                fontSize: "60px",
                color: "#131921"

              }} />

          </Avatar>

          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>

          <Box
            onSubmit={handleLogin}
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              value={usuarioRegistrado.uid ? usuarioRegistrado.correo : email}
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleInputChange}
            />

            <Grid container justifyContent="flex-end">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleGoogle}
              sx={{
                mt: 2,
                bgcolor: '#C81313'
              }}
              endIcon={<GoogleIcon />}
            >
              Ingresa con Google

            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2
              }}
              endIcon={<LoginIcon />}
            >
              entrar

            </Button>

          </Box>

        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />

      </Container>

    </ThemeProvider>
  );
}