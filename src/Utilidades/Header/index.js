import style from 'styled-components'
import Logo from './Logo'
// import ItemOpcao from './ItensHeader'
// import Buttom from '../Botao'
import '../Header/header.css'

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
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SOBRE NÓS</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>
                    <li><a href="#">PARCEIROS</a></li>
                    <li><a href="#">CONTATO</a></li>
                </ul>
            </nav>
            <button type="button"><a href='#'>Seja Parceiro!</a></button>
        </HeaderContainer>
    )
}

export default Header;