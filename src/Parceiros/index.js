import style from 'styled-components'
import Header from '../Utilidades/Header';
import '../Parceiros/parceiros.css';
import parceiroImg from '../Utilidades/Imagem/parceiros/parcImg.png'
import movimentoconexao from '../Utilidades/Imagem/parceiros/movimentoconexao.png'
import quebrandobarreiras from '../Utilidades/Imagem/parceiros/quebrandobarreiras.png'
import lovefutbol from '../Utilidades/Imagem/parceiros/lovefutbol.png'
import freefirelogo from '../Utilidades/Imagem/parceiros/freefirelogo.png'
import Footer from '../Utilidades/Footer';

const ParceiroContainer = style.div`
`


function Parceiro() {
    return (
        <ParceiroContainer>
            <Header></Header>
            <div className='parceiro-bg'>
                <div className="parceiro-banner">
                    <h1>CONSTRUINDO O FUTUTO JUNTOS</h1>
                    <p><span id='font-300'>CONHEÇA NOSSOS PARCEIROS</span></p>
                </div>
            </div>
            <h2 className='titulo-parceiros'><span id='font-300'>NOSSOS </span>PARCEIROS</h2>
            <div id='sub-titulo'></div>
            <div className="logos-parceiros">
                <div className="logo-parceiros-img">
                    <img src={movimentoconexao} alt="" />
                    <img src={quebrandobarreiras} alt="" />
                    <img src={lovefutbol} alt="" />
                    <img src={freefirelogo} alt="" />
                </div>
            </div>
            <section className="parceiro-conteudo">
                <img src={parceiroImg} alt="" />
                <div className='parceiro-text'>
                    <h2><span id='font-300'>UM POUCO DO QUE JÁ </span> CONSTRUIMOS JUNTOS <span id='font-300'>POR AQUI</span></h2>
                    <div id='sub-titulo-2'></div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <button type="button" className="button-parceiro">Saiba Mais</button>
                </div>
            </section>
            
            <Footer></Footer>
        </ParceiroContainer>
    )
};

export default Parceiro;