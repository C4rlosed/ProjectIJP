import style from 'styled-components'
import './App.css';
import Header from './Utilidades/Header';
import Home from './Home';
import Footer from './Utilidades/Footer';
import Sobre from './Sobre';

const AppContainer = style.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppContainer>
      {/* <Header></Header> */}
      {/* <Home>
      </Home> */}
      <Sobre></Sobre>
      {/* <Footer></Footer> */}
    </AppContainer>
  );
}

export default App;
