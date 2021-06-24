import React, { useEffect, useState } from 'react';
import http from '../Http';
import { Link } from 'react-router-dom'


const Categoria = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        http.get('categoria/todas').then(response => setCategorias(response.data))
    }, [])

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria, indice) => (
                    <Link key={indice} to={`/categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.nome}`}>
                            {categoria.nome}
                            
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default Categoria