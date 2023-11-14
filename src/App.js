import style from 'styled-components'
import './App.css';
import Header from './Utilidades/Header';
import Home from './Home';
import Footer from './Utilidades/Footer';
import Sobre from './Sobre';
import Noticias from './Noticias';

const AppContainer = style.div`
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <AppContainer>
      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
      <Noticias></Noticias>
    </AppContainer>
  );
}

export default App;
