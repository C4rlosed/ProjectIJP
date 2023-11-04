import { BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Noticias from './Noticias'
import Parceiros from './Parceiros'
import Contato from './Contato'

export const Routes = () => {
    return(
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home/>} />
                <Route path="/Sobre" element={<Sobre/>} />
                <Route path="/Noticias" element={<Noticias/>} />
                <Route path="/Parceiros" element={<Parceiros/>} />
                <Route path="/Contato" element={<Contato/>} />
            </ReactRoutes>
        </Router>
    );
};