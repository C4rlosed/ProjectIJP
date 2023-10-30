import styled from 'styled-components'
import logo from '../../Imagem/logo.png'

const LogoContainer = styled.div`
    display:flex;
    font-size:10px;
    margin-left: 20px;
`
const LogoImage = styled.img`
    padding: 0 10px 0 30px;
    height:70px;
    width:70px;
`
const Span = styled.span`
    font-size: 26px;
    font-weight:300;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Descrição da Imagem">
            </LogoImage>
            <h1><Span>INSTITUTO</Span><br></br>JARDIM PERI</h1>
        </LogoContainer>
    )
}

export default Logo;