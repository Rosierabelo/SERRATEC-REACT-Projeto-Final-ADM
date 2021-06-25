import { useState, useEffect } from "react";
import http from '../Http';
import CardProdutos from './CardProdutos';
import './estilo.css';

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        http.get('produto/todos').then(response => setProdutos(response.data))
    }, [])

    return (
        <div className="bodyProduto">
            <h1 className="tituloProdutos">Produtos</h1>
            <section className="sectionProduto"> 
                {produtos.map((item, indice) => <CardProdutos key={indice} url={item.url} codigo={item.codigo} categoria={item.categoria.nome} nome={item.nome} descricao={item.descricao} preco={item.preco.toFixed(2)}/>)}
            </section>
        </div>
    )
 
}
export default Produtos;