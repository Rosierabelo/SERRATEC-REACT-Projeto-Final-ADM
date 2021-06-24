import './Navbar.css'
import { Link } from 'react-router-dom';
import carrinho from './img1.png'
import perfil from './profile-user.png'
import { useHistory } from "react-router-dom";


const Navbar = ({token, aoLogout}) =>{
    const history = useHistory();
    
    const logout = () => {
        history.push('/login')
        aoLogout()
      }

      const Itens = () => {
        if (token) {
            return(
                <div>
                    <nav>
                        <ul>
                            <li><Link className="tituloTopo" to="/">Produto</Link></li>
                            <li><Link className="tituloTopo" to="/categoria">Categoria</Link></li>
                            <li><Link className="tituloTopo" to="/cadastroproduto">Cadastar Produto</Link></li>
                            <li><Link className="tituloTopo" to="/cadastrocategoria">Cadastar Categoria</Link></li>
                            <li><Link className="tituloTopo" onClick={logout}>Logout</Link></li>
                        </ul>
                        <ul>
                            <li><Link  to="/perfil"><img className="carrinho" src={perfil}></img></Link></li>
                        </ul>
                    </nav>
        
                </div>
            )
        }

        return <div>
            <nav>
                <ul>
                    <li><Link className="tituloTopo" to="/login">Login</Link></li>
                    <li><Link className="tituloTopo" to="/cadastro">Cadastre-se</Link></li>
                </ul>
            </nav>
        </div>
      }

      return (
         Itens()
      ) 
}
export default Navbar;