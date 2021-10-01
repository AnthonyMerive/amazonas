import React from 'react'
import { useParams } from 'react-router';
import data from '../datastructure.json'

export default function Productos() {

    const { categoria } = useParams();

    const products = data.productos.filter(data=> data.categoria.toLowerCase() === categoria)


    return (<>
            {products.map(productos=>

                <h4 key={productos.id}>{productos.nombre}</h4>
                
                )}
        </>)
}
