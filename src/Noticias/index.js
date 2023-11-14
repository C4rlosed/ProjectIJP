import style from 'styled-components'
import Header from '../Utilidades/Header'
import Footer from '../Utilidades/Footer'
import '../Noticias/noticia.css'

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
                        <div>
                            <div>
                                <img src={d.img} alt="" />
                            </div>
                            <div>
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
        img: '../Utilidades/Imagem/noticia1.png'
    },
    {
        title: `QUISQUE ALIQUAM`,
        info: `Quisque aliquam ligula et mi pharetra feugiat.`,
        img: '../Utilidades/Imagem/noticia2.png'
    },
    {
        title: `PORTA EST ANTE`,
        info: `In porta est ante, sed convallis turpis ornare et`,
        img: '../Utilidades/Imagem/noticia3.png'
    },


]

export default Noticia;