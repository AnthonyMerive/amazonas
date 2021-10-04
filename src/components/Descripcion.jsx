import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';

export default function Descripcion() {

    const { id } = useParams();

    const { productos } = useSelector(store => store.productos)

    const producto = productos.find(description => description.id === id)

    return (
        <>
            <Link to={`/${producto.categoria.toLowerCase()}`}><h6 className="ms-3 mt-3" >Volver</h6></Link>
            <h2>{producto.nombre}</h2>
            <br />
            <h4>{producto.descripcion}</h4>
            <hr />
            {producto.imagenes.map((img,index) =>
                <img key={index} src={img} alt="" />
            )
            }
            <hr />
            <h4>Contacto: {producto.contacto}</h4>
            <br />
            <h4>precio: US{producto.precio}</h4>
            <br />
            {producto.envioGratis&& <h4>¡¡ENVIO GRATIS!!</h4>}
        </>
    )
}
