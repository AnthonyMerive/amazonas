import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function CardCategories(props) {

    return (
        <Card sx={{ maxWidth: 280 }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.nombre}
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                alt="producto"
                height="250"
                image={props.imagen}
            />

            <CardActions>
                <Button sx={{ mt: 5 }} size="small"><Link style={{ textDecoration: 'none' }} to={`/${props.nombre.toLowerCase()}`}>ver más</Link></Button>
            </CardActions>
        </Card>
    );
}
