import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardCategories from './CardCategories'
import data from '../datastructure.json'

export default function Categories() {

    return (<>
        <Box sx={{ mt: "5%", ml:"3%"}}>
            <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                columns={{ xs: 1, sm: 8, md: 12 }}>

                {data.categorias.map(data => (
                    <Grid item xs={2} sm={4} md={3} key={data.id}>
                        <CardCategories nombre={data.nombre} imagen={data.imagen}/>
                    </Grid>

                ))}

            </Grid>
        </Box>


    </>)
}
