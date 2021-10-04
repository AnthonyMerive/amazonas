import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ProductoCard(props) {

    return (
        <Card sx={{ maxWidth: 280 }}>
            <Link style={{ textDecoration: 'none', color: 'rgb(24, 24, 24)' }} to={`/${props.categoria}/${props.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="250"
                        height="250"
                        image={props.imagenes[0]}
                        alt={props.nombre}
                        sx={{
                            objectFit: "contain"
                        }}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            component="div"
                            sx={{
                                fontSize: "1.3rem"
                            }}>
                            {props.nombre}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontSize: "1rem"
                            }}>
                            US$ {props.precio}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card >
    );
}