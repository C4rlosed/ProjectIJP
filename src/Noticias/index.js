import style from 'styled-components'
import Header from '../Utilidades/Header'
import Footer from '../Utilidades/Footer'
import '../Noticias/noticia.css'

const NoticiaContainer = style.div``


function Noticia(){
    return(
        <NoticiaContainer>
            <Header></Header>
                <div className='noticias-bg'>
                    <div className='noticias-banner'>
                        <h1>HISTÓRIAS QUE MARCAM</h1>
                        <p>VEJA AS NOSSAS NOTÍCIAS</p>
                    </div>
                </div>
                <h2 className='titulo-pg'>VEJA MAIS</h2>
            <Footer></Footer>
        </NoticiaContainer>
    )
};

export default Noticia;