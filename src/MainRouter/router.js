import {Routes, Route} from 'react-router-dom';
import Main from "../Pages/Main"
import Contato from '../Pages/Contato';
import Promocao from '../Pages/Promocao';
import CadastroUser from '../Pages/CadastroUser'
import CadastroDestino from '../Pages/CadastroDestino';

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/contato" element={<Contato />}/>
            {<Route path="/promoção" element={<Promocao />}/> }
            {<Route path="/cadastro" element={<CadastroUser />}/> }
            {<Route path="/destino" element={<CadastroDestino />}/> }
        </Routes>
    )
} 

export default MainRouter