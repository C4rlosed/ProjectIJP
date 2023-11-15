import './App.css';

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Noticias from './pages/noticias'
import Parceiros from './pages/parceiros'
import Contato from './pages/contato'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Sobre" element={<Sobre />} />
      <Route path="Noticias" element={<Noticias />} />
      <Route path="Parceiros" element={<Parceiros />} />
      <Route path="Contato" element={<Contato />} />
    </Routes>
  );
}

export default App;
