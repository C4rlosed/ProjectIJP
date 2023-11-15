import style from 'styled-components'
import Header from '../Utilidades/Header'
import Footer from '../Utilidades/Footer'
import '../Noticias/noticia.css'
import noticia1img from '../Utilidades/Imagem//noticias/noticia1.png'
import noticia2img from '../Utilidades/Imagem//noticias/noticia2.png'
import noticia3img from '../Utilidades/Imagem//noticias/noticia3.png'

const NoticiaContainer = style.div``


function Noticia() {
    return (
        <NoticiaContainer>
            <Header></Header>
            <div className='noticias-bg'>
                <div className='noticias-banner'>
                    <h1>HISTÓRIAS QUE MARCAM</h1>
                    <p>VEJA AS NOSSAS NOTÍCIAS</p>
                </div>
            </div>
            <h2 className='titulo-pg'>VEJA MAIS</h2>

            <div className='card-container'>
                <div className='card'>
                    {data.map((d) => (
                        <div className='card-conteudo'>
                            <div className='card-img'>
                                <img src={d.image} alt="" />
                            </div>
                            <div className='card-text'>
                                <h2>{d.title}</h2>
                                <p>{d.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </NoticiaContainer>
    )
};

const data = [
    {
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        image: noticia1img
    },
    {
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        image: noticia2img
    },
    {
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        image: noticia3img
    },


]

export default Noticia;