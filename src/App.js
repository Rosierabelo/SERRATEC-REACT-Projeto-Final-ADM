import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cadastro from './Login/Cadastro';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Produtos from './Produtos/Produtos';
import CadastroProduto from './Produtos/CadastroProduto';
import Perfil from './Login/Perfil';
import { useEffect, useState } from 'react';
import Categoria from './Produtos/Categoria';
import CadastroCategoria from './Produtos/CadastroCategoria';
import Pagina404 from './Pagina404/Pagina404';
import './App.css';

function App() {


  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }  

  useEffect(() =>{
    const tokeAntigo = localStorage.getItem('token')
    if (tokeAntigo) {
      setToken(tokeAntigo)
    }
  }, [])



  return (
    <BrowserRouter>
    <Navbar token={token} aoLogout={logout}/>
      <Switch>
        <Route exact path="/">
          <Produtos/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro/>
        </Route>
        <Route exact path="/login">
          <Login onLogin={onLogin}/>
        </Route>
        <Route exact path="/perfil">
          <Perfil/>
        </Route>
        <Route path="/cadastroproduto">
          <CadastroProduto />
        </Route>
        <Route path="/categoria">
          <Categoria />
        </Route>
        <Route path="/cadastrocategoria">
          <CadastroCategoria />
        </Route>
        <Route >
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
