import style from 'styled-components'
import '../Footer/footer.css'
import footerImg from '../Imagem/fundoParceiros.png'
import logoFooter from '../Imagem/logo-banner.png'
import instagram from '../Imagem/redes_sociais/instagram.svg'
import facebook from '../Imagem/redes_sociais/facebook.svg'
import whatsapp from '../Imagem/redes_sociais/whatsapp.svg'

const FooterContainer = style.div`
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    height: 850px;
`


function Footer() {
    return (
        <FooterContainer>
            <div className='footer-bg'>
                <h2><span id='font-300'>SEJA</span> PARCEIRO <span id='font-300'>E</span> FAÇA PARTE DESTA HISTÓRIA!</h2>
                <p>Aenean non molestie nulla. Intege pulvinar enim justo, id viverra ligula varius sit amet. Nullam sagittis elit imperdiet lorem mollis pretium.</p>
                <button type='button'>Saiba Mais</button>
            </div>
            <div className='footer'>
                <img id='logoFooter' src={logoFooter} alt='Logo Instituto Jardim Peri' />
                <h2><span id='font'>INSTITUTO</span><br /> JARDIM PERI</h2>
                <ul class="links-social">
                    <li>
                        <a href="./">
                            <img src={instagram} alt="Instagram" class="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img src={facebook} alt="Facebook" class="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img src={whatsapp} alt="Whatsapp" class="img-icons" />
                        </a>
                    </li>
                </ul>
                <p>R. Condessa Amália Matarazzo, 136 - Jardim Peri, São Paulo - SP, 02652-000</p>
            </div>
        </FooterContainer>
    )
};

export default Footer; 