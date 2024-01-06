import './style.css'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from '../../axios/axios';
import ModalEditUsuario from '../ModalEditUsuario';
import ModalDeleteUsuario from '../DeletarUsuarioModal';
function TabelaListarUsuario(){
    const [usuario, setUsuario] = useState([]);
    const [open,setOpen] = useState('')
    const [openDelete,setOpenDelete] = useState('')
    const [user, setUsuarioId] = useState(null);
    
        async function ListUsuario(){
    
            try {
    
                const response = await axios.get('/api/Usuarios')
                setUsuario(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    async function handleEdit(id){
        setOpen(true)
        setUsuarioId(id)
    }
    
    async function handleDelete(){
        setOpenDelete(true)
    }
    useEffect(()=>{
        ListUsuario();
    },[])
        return(
    <div className='destino-body'>
        <div class="row-">
            <div class="col-md-offset-1 col-md-10">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12">
                                <a href="/cadastro" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i>Nossos usuários</a>
                            
                               
                            </div>
                        </div>
    
                    </div>
                    <div class="panel-body table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                <th>identificação</th>
                                <th>Nome</th>
                                <th></th>
                                
                                <th>Ações</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuario.map((user)=>(
    
    
                                <tr key={user.id}>
                        
     
    <td>
    <h4>{user.id}</h4>   
    </td> 
    
    <td><h4>{user.name}</h4></td>
    <td><h4>{}</h4></td>
    <td>

    <td>
        <ul class="action-list">
                 
        {/* <img className='deletarTable' onClick={()=>handleDelete(destino.id)}  alt='deletar'></img>
        <img className='deletarTable' onClick={()=>handleEdit(destino.id)}  alt='editar'>
    </img> */}
    <ul className="action-list">
               
                <Link to={`/usuario/${user.id}`}>
                  <button>Detalhes</button>
                </Link>
                
              </ul>

              <ul className="action-list editar-btn">
                
               
                  <button  onClick={()=>handleEdit(user.id)} >Editar</button>
                  </ul>
                <ul className="action-list">
                
                
                  <button onClick={()=>handleDelete(user.id)}>Deletar</button>
        
              </ul>
        </ul>
    </td>
     <div>
        <td>
             <ModalEditUsuario open={open}
            handleClose={()=>setOpen(false)}
            />
        </td>
        <td>
              <ModalDeleteUsuario open={openDelete} 
            handleClose={()=>setOpenDelete(false)}
            /> 
        </td>
    </div> 
    </td>
    </tr>
    ))}              </tbody>
                        </table>
                    </div>
                    <div class="panel-footer">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        )
    }
    
    export default TabelaListarUsuario