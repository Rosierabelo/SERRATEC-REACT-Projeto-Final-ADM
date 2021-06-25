import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../Http";


const Produto = ( {item}) => {
    const { nome } = useParams();
    const [produto, setProduto] = useState({ categoria: {}, preco: 0 });

    useEffect(() => {
        http.get('produto/' + nome).then(response => setProduto(response.data))
    }, [nome])

    return (
        <div className="bodyProduto">
            <div className="detalhe-prod">
            <img className="imagem" src={produto.url}></img>
                <h2 className="titulo-prod">{produto.nome}</h2>
                <div className="detalheItem">
                    <h4>{produto.categoria.nome}</h4>
                    <h4>{produto.codigo}</h4>
                    <p>{produto.descricao}</p>
                    <div className="preco-prod">
                        <p>R$ </p><p>{produto.preco.toFixed(2)}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Produto;