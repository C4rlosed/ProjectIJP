import style from 'styled-components'
import Header from '../Utilidades/Header';
import './contatoParceria.css'
import logoFooter from '../Utilidades/Imagem/logo-banner.png'
import instagram from '../Utilidades/Imagem/redes_sociais/instagram.svg'
import facebook from '../Utilidades/Imagem/redes_sociais/facebook.svg'
import whatsapp from '../Utilidades/Imagem/redes_sociais/whatsapp.svg'
import { Link } from 'react-router-dom'

const ParceriaContainer = style.div``

const Formulario = style.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Botão = style.div`
    margin-left: 24%;
    margin-bottom: 3%;
`

function ContatoParceria() {
    return (
        <ParceriaContainer>
            <Header></Header>
            <div className='contato-parceiro-bg'>
                <h1>JUNTOS FAZEMOS A DIFERENÇA:</h1>
                <p><span id='font-300'>SEJA NOSSO PARCEIRO</span></p>
            </div>
            <section className='bg-formulario-parceiro'>
                <div className="contact-form-parceiro">
                    <h2 className="titulo-form">CONTATO</h2>
                    <Formulario>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="telefone" id="telefone" name="telefone" required />
                        </div>
                        <div>
                            <label htmlFor="CPF">CPF:</label>
                            <input type="CPF" id="CPF" name="CPF" required />
                        </div>
                        <div>
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <Botão>
                            <button type="submit">Enviar</button>
                        </Botão>
                    </Formulario>
                </div>

                <div className='midias-sociais-parceiro'>
                    <div className='instagram'>
                        <h2>INSTAGRAM</h2>
                        <p>@institutojardimperi</p>
                    </div>

                    <div className='whatsapp'>
                        <h2>WHATSAPP</h2>
                        <p>(11) 97629-6323</p>
                    </div>

                    <div className='endereco'>
                        <h2>ENDEREÇO</h2>
                        <p>R. Condessa Amália Matarazzo, 136 - <br /> Jardim Peri, São Paulo - SP, 02652-000</p>
                    </div>
                </div>
            </section>
            <div className='footer-contato-parceiro'>
                <img id='logoFooter' src={logoFooter} alt='Logo Instituto Jardim Peri' />
                <h2><span id='font'>INSTITUTO</span><br /> JARDIM PERI</h2>
                <ul className="links-social">
                    <li>
                        <a href="https://www.instagram.com/institutojardimperi/" target="_blank">
                            <img src={instagram} alt="Instagram" class="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/institutoperi/" target="_blank">
                            <img src={facebook} alt="Facebook" class="img-icons" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/search?q=instituto+jardim+peri&oq=ins&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYQTIGCAYQRRhBMgYIBxBFGDzSAQgzNjUxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#" target="_blank">
                            <img src={whatsapp} alt="Whatsapp" class="img-icons" />
                        </a>
                    </li>
                </ul>
                <p>R. Condessa Amália Matarazzo, 136 - Jardim Peri, São Paulo - SP, 02652-000</p>
            </div>
        </ParceriaContainer>
    )
};

export default ContatoParceria;