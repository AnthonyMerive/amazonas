import { useParams } from 'react-router'
import ProductoCard from './ProductoCard'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'

export default function Productos() {

    const { categoria } = useParams();

    const { productos } = useSelector(store => store.productos)

    const products = productos.filter(data => data.categoria.toLowerCase() === categoria)

    return (<>
        <Link to="/categorias"><h6 className="ms-3 mt-3" >Volver a categorias</h6></Link>
        <Box sx={{ mt: "2%", ml: "3%" }}>

            {products.length > 0 &&
                <h4 className="mb-3">{products[0].categoria}</h4>
            }
            <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                columns={{ xs: 1, sm: 8, md: 12 }}>

                {products.length > 0 ?
                    products.map((data, index) => (
                        <Grid item xs={2} sm={4} md={3} key={index}>

                            <ProductoCard
                                nombre={data.nombre}
                                imagenes={data.imagenes}
                                precio={data.precio}
                                id={data.id}
                                categoria={data.categoria.toLowerCase()}
                            />

                        </Grid>
                    ))
                    :
                    <Grid>
                        <h5 className="m-5">Cargando...</h5>
                    </Grid>
                }

            </Grid>
        </Box>
    </>)
}
