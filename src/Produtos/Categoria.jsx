import React, { useEffect, useState } from 'react';
import http from '../Http';
import { Link } from 'react-router-dom'
import './estilo.css'


const Categoria = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        http.get('categoria/todas').then(response => setCategorias(response.data))
    }, [])

    return (
        <div>
            <h1>Categorias</h1>
            <ul className="lista-categorias">
                {
                    categorias.map((categoria, indice) => (
                        <Link className="categoriaLink" key={indice} to={`/categoria/${categoria.id}`}>
                            <li className="categoria">
                                {categoria.nome}

                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categoria