import { Link } from "react-router-dom";
import './estilo.css'

const CardProdutos = ({ nome, preco, url, categoria }) => {


    return (
        <div className="cardProduto">
            <img className="imagem" src={url}></img>
            <h3 className="titulo">{nome}</h3>
            <div>
               <div> <h4>{categoria}</h4></div>
                <div className='cardPreco'><p>R$ </p><p>{preco}</p></div>
            </div>
        </div>
    )
}
export default CardProdutos;