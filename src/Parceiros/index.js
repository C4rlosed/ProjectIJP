import style from 'styled-components'
import Header from '../Utilidades/Header';
import '../Parceiros/parceiros.css';
import parceiroImg from '../Utilidades/Imagem/parceiros/parcImg.png'
import movimentoconexao from '../Utilidades/Imagem/parceiros/movimentoconexao.png'
import quebrandobarreiras from '../Utilidades/Imagem/parceiros/quebrandobarreiras.png'
import lovefutbol from '../Utilidades/Imagem/parceiros/lovefutbol.png'
import freefirelogo from '../Utilidades/Imagem/parceiros/freefirelogo.png'

const ParceiroContainer = style.div`
`


function Parceiro() {
    return (
        <ParceiroContainer>
            <Header></Header>
            <div className="parceiro-banner">
                <h1><span id=""> </span></h1>
                <p></p>
            </div>

            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={movimentoconexao} height="100" width="250"
                            alt="" />
                    </div>
                    <div className="slide">
                        <img src={quebrandobarreiras} height="80" width="200"
                            alt="" />
                    </div>
                    <div className="slide">
                            <img src={lovefutbol} height="100" width="200"
                            alt="" />
                    </div>
                    <div className="slide">
                        <img src={freefirelogo} height="100" width="200"
                            alt="" />
                    </div>
                </div>
            </div>

            <section className="background">
                <img src={parceiroImg} alt="" />
                <div>
                    <h2><span id='font'>UM POUCO DO QUE JÁ </span> CONSTRUIMOS JUNTOS </h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                    </p>
                    <button type="button" className="button-parceiro">Saiba Mais</button>
                </div>
            </section>
        </ParceiroContainer>
    )
};

export default Parceiro;