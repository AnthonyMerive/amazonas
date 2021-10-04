import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import CardCategories from './CardCategories'
import styles from '../styles/Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { mostrarAsincronico } from '../actions/actionCategorias'
import { mostrarProductoAsincronico } from '../actions/actionProductos'

export default function Categories() {

    const dispatch = useDispatch();
    const { categorias } = useSelector(store => store.categorias)

    useEffect(() => {
        dispatch(mostrarAsincronico())
        dispatch(mostrarProductoAsincronico())
    }, [dispatch])


    return (<>
        <Box sx={{ mt: "2%", ml: "3%" }}>
            <h4 className="mb-3">Explora en nuestras categorias:</h4>
            <Grid
                container
                spacing={{ xs: 3, md: 4 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
            >
                {categorias.length > 0 ?
                    categorias.map((data, index) => (
                        <Grid className={styles.categorias} item xs={2} sm={4} md={3} key={index}>
                            <CardCategories nombre={data.nombre} imagen={data.imagen} />
                        </Grid>
                    ))
                    :
                    <Grid className={styles.categorias}>
                        <h5 className="m-5">Cargando...</h5>
                    </Grid>

                }


            </Grid>
        </Box>


    </>)
}
