import style from 'styled-components'
import '../Footer/footer.css'
import footerImg from '../Imagem/fundoParceiros.png'

const FooterContainer = style.div`
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    height: 1030px;
`


function Footer(){
    return(
        <FooterContainer>
            <div className='footer-bg'>
                <h2>SEJA PARCEIRO E FAÇA PARTE DESTA HISTÓRIA!</h2>
                <p>Aenean non molestie nulla. Integer pulvinar enim justo, id viverra ligula varius sit amet. Nullam sagittis elit imperdiet lorem mollis pretium.</p>
                <button type='button'>Saiba Mais</button>
            </div>
        </FooterContainer>
    )
};

export default Footer;