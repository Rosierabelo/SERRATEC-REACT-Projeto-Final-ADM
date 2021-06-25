import { useState, useEffect } from 'react';
import './formProduto.css';
import http from "../Http";
import MensagemErro from '../Login/MensagemAlerta';
const FormularioRegistro = () => {

    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipo, setTipo] = useState('');
    const [url, setUrl] = useState('');

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }

    const manipuladorCodigo = (evento) => {
        setCodigo(evento.target.value)
    }    

    const manipuladorDescricao = (evento) => {
        setDescricao(evento.target.value)
    }

    const manipuladorPreco = (evento) => {
        setPreco(evento.target.value)
    }

    const manipuladorQuantidadeEstoque = (evento) => {
        setQuantidadeEstoque(evento.target.value)
    }

    const manipuladorCategoria = (evento) => {
        setCategoria(evento.target.value)
    }

    const manipuladorUrl = (evento) => {
        setUrl(evento.target.value)
    }

    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        http.get('categoria/todas').then(response => setCategorias(response.data))
    }, [])

    const cadastrarProduto = (evento) => {
        evento.preventDefault()
        const produto = {
            nome: nome,
            codigo: codigo,
            descricao: descricao,
            preco: preco,
            quantidadeEstoque: quantidadeEstoque,
            url:url,
            categoria:{
                id: categoria
            }
        }

        http.post('produto', produto).then(response => {
            console.log(response.data)
            setTipo("sucesso")
            setMensagem("Cadastro Efetuado com sucesso")
            setTimeout(() => {
                setTipo("")
                setMensagem("")
            }, 3000)
        }).catch(erro => {
            console.log(erro)
            setMensagem("Cadastro não efetuado")
            setTimeout(() => {
                setMensagem('')
            }, 4000)
        })
    }

    return (
       <div className="formulario">
           <h1>Cadastro de produto</h1>
           <form onSubmit={cadastrarProduto}>
            <div>
                <label className="labels">Nome</label>
                <input required value={nome} onChange={manipuladorNome} />
            </div>
            <div>
                <label className="labels">Código</label>
                <input required value={codigo} onChange={manipuladorCodigo} />
            </div>
            <div>
                <label className="labels">Descrição</label>
                <input required value={descricao} onChange={manipuladorDescricao} />
            </div>
            <div>
                <label className="labels">Preço</label>
                <input required value={preco} onChange={manipuladorPreco} />
            </div>
            <div>
                <label className="labels">Quantidade em Estoque</label>
                <input required value={quantidadeEstoque} onChange={manipuladorQuantidadeEstoque} />
            </div>
            <div>
                <label className="labels">URL da Imagem</label>
                <input required value={url} onChange={manipuladorUrl} />
            </div>
            
            <div>
                <label className="labels">Categoria</label>
                <select className="selecionaCateg" onChange={manipuladorCategoria}>
                    <option></option>
                    {categorias.map((categoria, indice) => (
                    <option key={indice} value={categoria.id}>{categoria.nome}</option>  
                    ))}
                </select>
            </div>
 
            {mensagem && <MensagemErro tipo={tipo} msg={mensagem} />}
            <button className="botaoProdCadastro">
                Cadastrar
            </button>
        </form>
       </div>
    );
}

export default FormularioRegistro;