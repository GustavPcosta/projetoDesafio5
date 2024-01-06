import {Routes, Route} from 'react-router-dom';
import Main from "../Pages/Main"
import Contato from '../Pages/Contato';
import Promocao from '../Pages/Promocao';
import CadastroUser from '../Pages/CadastroUser'
import CadastroDestino from '../Pages/CadastroDestino';
import TabelaListarDestino from '../Components/TabelaListarDestino';
import DetalheDestino from '../Pages/DetalheDoDestino';
import TabelaListarUsuario from '../Components/TabelaUsuario';
import DetalheUsuario from '../Pages/DetalheUsuario';

function MainRouter(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/contato" element={<Contato />}/>
            {<Route path="/promoção" element={<Promocao />}/> }
            {<Route path="/cadastro" element={<CadastroUser />}/> }
            {<Route path="/destino" element={<CadastroDestino />}/> }
            {<Route path="/listagem" element={<TabelaListarDestino />}/> }
            {<Route path="/destino/:id" element={<DetalheDestino/>}/> }
            {<Route path="/usuario/:id" element={<DetalheUsuario/>}/> }
            {<Route path="/usuarios" element={<TabelaListarUsuario/>}/> }
            
        </Routes>
    )
} 

export default MainRouter