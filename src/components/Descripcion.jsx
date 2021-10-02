import React from 'react'
import { Link } from 'react-router-dom'
import data from '../datastructure.json'
import { useParams } from 'react-router'

export default function Descripcion() {

    const { id } = useParams();

    const producto = data.productos.find(description => description.id === parseInt(id))

    console.log(producto)

    return (
        <div>
            <Link to={`/${producto.categoria.toLowerCase()}`}><h6 className="ms-3 mt-3" >Volver</h6></Link>
            {producto.nombre}
            {producto.descripcion}
            {producto.imagenes.map(img => 
                <img src={img} alt="" />
            )
            }
        </div>
    )
}
