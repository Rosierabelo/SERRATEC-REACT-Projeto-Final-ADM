import MensagemErro from './MensagemAlerta'

import http from '../Http'
import './Login.css'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
const Login = ({onLogin}) =>{

    const [mensagem, setMensagem] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory();
    const [tipo, setTipo] = useState('');


    useEffect(() => {
        localStorage.removeItem('token')
      }, [])
    

    const efetuarLogin = (evento) =>{
        evento.preventDefault()
        const usuario = {
            user: email,
            pass : senha
        }
        http.post('auth', usuario)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('email', response.data.email)
            onLogin(response.data.token)
            history.push('/')
        })
        .catch(erro => {
            console.log('Algo deu errado')
            if (erro.response.data && erro.response.data.message) {
              setMensagem("Email ou Senha incorreto")
            } else {
              setMensagem('OPS... um erro não esperado.')
            }
            setTimeout(() => {
              setMensagem('')
              setTipo('')
            }, 4000);
          })
    }

    const manipuladorEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) =>{
        setSenha(evento.target.value)
    }

    return (
        <div>
        <h1>Tela de Login</h1>
        { mensagem && <MensagemErro tipo={tipo} msg={mensagem} /> }
        <form onSubmit={efetuarLogin}>
 
            <div>
                <label>Email</label>
                <input value={email} onChange={manipuladorEmail} type="text" required></input>
            </div>
            <div>
                <label>Senha</label>
                <input value={senha} onChange={manipuladorSenha} type="password" required></input>
            </div>
            <button className="botaoLoginCadastro">Entrar</button>
        </form>
    </div>
    )
}

export default Login;