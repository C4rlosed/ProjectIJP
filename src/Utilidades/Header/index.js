import style from 'styled-components'
import Logo from './Logo'
// import ItemOpcao from './ItensHeader'
// import Buttom from '../Botao'
import '../Header/header.css'
import { Link } from 'react-router-dom'

const HeaderContainer = style.div`
    background-color:#ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 20px;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <nav>
                <ul className='header-menu'>
                    <Link to="/" >HOME</Link>
                    <Link to="/Sobre" >SOBRE NÓS</Link>
                    <Link to="/Noticias" >NOTÍCIAS</Link>
                    <Link to="/Parceiros" >PARCEIROS</Link>
                    <Link to="/Contato" >CONTATO</Link>
                </ul>
            </nav>
            <button type="button"><Link to="/Contato">Seja Parceiro!</Link></button>
        </HeaderContainer>
    )
}

export default Header;