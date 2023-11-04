import style from 'styled-components'
import Header from '../Utilidades/Header';
import Footer from '../Utilidades/Footer';
import '../Sobre/sobre.css'
import sobreimg1 from '../Utilidades/Imagem/sobre_nos/quem-somos1.png'
import sobreimg2 from '../Utilidades/Imagem/sobre_nos/quem-somos2.png'


const SobreContainer = style.div``


function Sobre() {
    return (
        <SobreContainer>
            <Header></Header>
            <div className='sobre-bg'>
                <div className='sobre-banner'>
                    <h1><span id='font-300'>SOBRE O </span>INSTITUTO</h1>
                    <p>CONHEÇA A NOSSA HISTÓRIA</p>
                </div>
            </div>
            <h2 className='titulo-pg'>QUEM SOMOS</h2>
            <section className='sobre-conteudo-1'>
                <div>
                    <p>Mauris aliquet arcu purus, vel condimentum ligula eleifend eu. In hac habitasse platea dictumst.
                        Quisque aliquam ligula et mi pharetra feugiat. In porta est ante, sed convallis turpis ornare et.
                        Mauris aliquet arcu purus, vel condimentum ligula eleifend eu. In hac habitasse platea dictumst.
                        Quisque aliquam ligula et mi pharetra feugiat. In porta est ante, sed convallis turpis ornare et.</p>
                </div>
                <img src={sobreimg1} alt='' />
            </section>
            <section className='sobre-conteudo-2'>
                <img src={sobreimg2} alt='' />
                <div>
                    <p>Mauris aliquet arcu purus, vel condimentum ligula eleifend eu. In hac habitasse platea dictumst.
                        Quisque aliquam ligula et mi pharetra feugiat. In porta est ante, sed convallis turpis ornare et.
                        In hac habitasse platea dictumst. Quisque aliquam ligula et mi pharetra feugiat.
                        In porta est ante, sed convallis turpis ornare et.</p>
                </div>
            </section>
            <Footer></Footer>
        </SobreContainer>
    )
};

export default Sobre;