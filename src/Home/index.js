import style from 'styled-components'
import '../Home/home.css'
import logoBanner from '../Utilidades/Imagem/logo-banner.png'
import sobreimg from '../Utilidades/Imagem/sobre_home.png'
import doacaoimg from '../Utilidades/Imagem/doacao_home.png'
import noticia1img from '../Utilidades/Imagem/noticia1.png'
import noticia2img from '../Utilidades/Imagem/noticia2.png'
import noticia3img from '../Utilidades/Imagem/noticia3.png'


const HomeContainer = style.div`
    height: 100%;
    width: 100%;

`



function Home() {
    return (
        <HomeContainer>
            <div className='home-bg'>
                <div className='home-banner'>
                    <img id='LogoBanner' src={logoBanner} alt='Logo Instituto Jardim Peri' />
                    <h1><span id='font-300'>INSTITUTO</span><br /> JARDIM PERI</h1>
                    <p>NOSSA MISSÃO É SERVIR</p>
                </div>
            </div>
            <section className='sobre-bg'>
                <img src={sobreimg} alt='' />
                <div>
                    <h2><span id='font-300'>CONHEÇA O </span> INSTITUTO</h2>
                    <p>Mauris aliquet arcu purus, vel condimentum ligula eleifend eu. In hac habitasse platea dictumst. Quisque aliquam ligula et mi pharetra feugiat. In porta est ante, sed convallis turpis ornare et.</p>
                    <button type='button' className='button-home'>Saiba Mais</button>
                </div>
            </section>
            <section className='doacao-bg'>
                <div>
                    <h2><span id='font-300'>SEJA UM</span> APOIADOR!</h2>
                    <p>Ut pellentesque dignissim sapien sed lobortis. Aenean non molestie nulla. Integer pulvinar enim justo, id viverra ligula varius sit amet. Nullam sagittis elit imperdiet lorem mollis pretium. Nullam vitae nibh ullamcorper, cursus libero nec, tincidunt est.</p>
                    <button type='button' className='button-home'>Doe já!</button>
                </div>
                <img src={doacaoimg} alt='' />
            </section>
            <article className='noticias-bg'>
                <div className='bannerNews'></div>
                <div className='noticias-conteudo'>
                    <div className='noticias'>
                        <a>
                            <img src={noticia1img} alt=''></img>
                            <h1>PORTA EST ANTE</h1>
                            <p>In porta est ante, sed convallis turpis ornare et</p>
                        </a>
                        <a>
                            <img src={noticia2img} alt=''></img>
                            <h1>PORTA EST ANTE</h1>
                            <p>In porta est ante, sed convallis turpis ornare et</p>
                        </a>
                        <a>
                            <img src={noticia3img} alt=''></img>
                            <h1>PORTA EST ANTE</h1>
                            <p>In porta est ante, sed convallis turpis ornare et</p>
                        </a>
                    </div>
                </div>
            </article>
        </HomeContainer>
    )
};

export default Home;