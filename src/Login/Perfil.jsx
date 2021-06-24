import { useEffect, useState } from "react"
import http from "../Http"
import axios from "axios"
const Perfil = () => {

    const id = localStorage.getItem('id')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [dataNascimento, setData] = useState('')
    const [cep, setCep] = useState('')
    const [numeroResidencia, setNumero] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [complemento, setComplemento] = useState('')

    const obterCep = (evento) => {
        if (!evento.target.value){
            return
        }
        const url = `https://viacep.com.br/ws/${evento.target.value}/json/`;
        axios.get(url)
        .then(response => {
          if (!response.data.erro){
              setRua(response.data.logradouro)
              setBairro(response.data.bairro)
              setCidade(response.data.localidade)
              setUf(response.data.uf)
          }
          console.log(response.data);
        })
        .catch(erro => {
          console.log(erro);
        })
      }

    useEffect(() => {
        http.get('cliente/detalhe/' + id)
          .then(response => {
            setNome(response.data.nome)
            setTelefone(response.data.telefone)
            setCpf(response.data.cpf)
            setData(response.data.dataNascimento)
            setCep(response.data.cep)
            setNumero(response.data.numeroResidencia)
            setComplemento(response.data.complemento)
            setEmail(response.data.email)
            setUsername(response.data.username)
          })
      }, [id])

    const salvar = (evento) => {
        evento.preventDefault()
        const cliente = {
            nome: nome,
            cpf: cpf,
            telefone : telefone,
            dataNascimento : dataNascimento,
            endereco : {
                cep : cep,
                numeroResidencia : numeroResidencia,
                rua : rua,
                bairro : bairro,
                cidade : cidade,
                estado : uf,
                complemento : complemento
            },
            email : email,
            username : username,
            id: id
        }
        http.put('cliente/' + id, cliente)
        .then(response => {
          console.log(response.data)
        })
        .catch(erro => {
          console.log('Algo deu errado')
          console.log(erro)
        })
    }

    const manipuladorNome = (evento) =>{
        setNome(evento.target.value)
    }

    const manipuladorCpf = (evento) =>{
        setCpf(evento.target.value)
    }

    const manipuladorTelefone = (evento) =>{
        setTelefone(evento.target.value)
    }

    const manipuladorData = (evento) =>{
        setData(evento.target.value)
    }

    const manipuladorCep = (evento) =>{
        setCep(evento.target.value)
    }

    const manipuladorNumero = (evento) =>{
        setNumero(evento.target.value)
    }

    const manipuladorEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorUsername = (evento) =>{
        setUsername(evento.target.value)
    }

    const manipuladorComplemento = (evento) =>{
        setComplemento(evento.target.value)
    }


    return (
        <div>
            <h1>Perfil</h1>
            <div>
                  <form onSubmit={salvar}>
                    <div>
                        <div>
                            <label>Nome</label>
                            <input value={nome} onChange={manipuladorNome} type="text"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input value={email} onChange={manipuladorEmail} type="text" disabled></input>
                        </div>
                        <div>
                            <label>CPF</label>
                            <input value={cpf} onChange={manipuladorCpf} type="number" disabled></input>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <input value={telefone} onChange={manipuladorTelefone} type="number"></input>
                        </div>
                        <div>
                            <label>Data de Nascimento</label>
                            <input value={dataNascimento} onChange={manipuladorData}  type="date" disabled></input>
                        </div>
                        <div>
                            <label>CEP</label>
                            <input value={cep} onBlur={obterCep} onChange={manipuladorCep} type="number"></input>
                        </div>
                        <div>
                            <label>Numero Residencial</label>
                            <input value={numeroResidencia} onChange={manipuladorNumero}  type="number"></input>
                        </div>
                        <div>
                            <label>Bairro</label>
                            <input value={bairro} onChange={obterCep}  type="text"></input>
                        </div>
                        <div>
                            <label>Cidade</label>
                            <input value={cidade} onChange={obterCep} type="text" disabled></input>
                        </div>
                        <div>
                            <label>Complemento</label>
                            <input value={complemento} onChange={manipuladorComplemento}  type="text"></input>
                        </div>
                        <div>
                            <label>Estado</label>
                            <input value={uf} onChange={obterCep}  type="text"></input>
                        </div>
                        <div>
                            <label>Rua</label>
                            <input value={rua} onChange={obterCep}  type="text"></input>
                        </div>
                        <div>
                            <label>Username</label>
                            <input value={username} onChange={manipuladorUsername} type="text" ></input>
                        </div>
                    </div>
                    <button className="botaoLoginCadastro">Salvar</button>
                </form>
            </div>
        </div>

    )
}

export default Perfil;