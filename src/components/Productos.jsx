import React from 'react'
import { useParams } from 'react-router'
import data from '../datastructure.json'
import ProductoCard from './ProductoCard'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'

export default function Productos() {

    const { categoria } = useParams();

    const products = data.productos.filter(data => data.categoria.toLowerCase() === categoria)


    return (<>

        <Box sx={{ mt: "5%", ml: "3%" }}>
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
