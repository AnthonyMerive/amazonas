import React from 'react'
import { useParams } from 'react-router'
import data from '../datastructure.json'
import ProductoCard from './ProductoCard'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export default function Productos() {

    const { categoria } = useParams();

    const products = data.productos.filter(data => data.categoria.toLowerCase() === categoria)


    return (<>
    <Link to="/categorias"><h6 className="ms-3 mt-3" >Volver a categorias</h6></Link>
        <Box sx={{ mt: "2%", ml: "3%" }}>

            <h4 className="mb-3">{categoria}</h4>

            <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                columns={{ xs: 1, sm: 8, md: 12 }}>

                {products.map(productos =>
                    <Grid item xs={2} sm={4} md={3} key={productos.id}>

                        <ProductoCard
                            nombre={productos.nombre}
                            imagenes={productos.imagenes}
                            precio={productos.precio}
                            id={productos.id}
                            categoria={productos.categoria.toLowerCase()}
                        />

                    </Grid>
                )}

            </Grid>
        </Box>
    </>)
}
