import './style.css'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import ModalEditDestino from '../ModalEditDestino';
import ModalDeleteDestino from '../DeletarDestinoModal';
import axios from '../../axios/axios';


function TabelaListarDestino(){
    const [destino, setDestino] = useState([]);
    const [open,setOpen] = useState('')
    const [openDelete,setOpenDelete] = useState('')
    const [destinoId, setAssociacaoId] = useState(null);
    
        async function ListDestino(){
    
            try {
    
                const response = await axios.get('/api/Destinoes')
                setDestino(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
    async function handleEdit(id){
        setOpen(true)
        setAssociacaoId(id)
    }
    
    async function handleDelete(){
        setOpenDelete(true)
    }
    useEffect(()=>{
        ListDestino();
    },[])
        return(
    <div className='destino-body'>
        <div class="row-">
            <div class="col-md-offset-1 col-md-10">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12">
                                <a href="#" class="btn btn-sm btn-primary pull-left"><i class="fa fa-plus-circle"></i>Nossos destinos disponíveis</a>
                            
                               
                            </div>
                        </div>
    
                    </div>
                    <div class="panel-body table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                <th>identificação</th>
                                <th>Destino</th>
                                <th>Estado</th>
                                
                                <th>Ações</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {destino.map((destino)=>(
    
    
                                <tr key={destino.id}>
                        
     
    <td>
    <h4>{destino.id}</h4>   
    </td> 
    
    <td><h4>{destino.name}</h4></td>
    <td><h4>{destino.estado}</h4></td>
    <td>

    <td>
        <ul class="action-list">
                 
        {/* <img className='deletarTable' onClick={()=>handleDelete(destino.id)}  alt='deletar'></img>
        <img className='deletarTable' onClick={()=>handleEdit(destino.id)}  alt='editar'>
    </img> */}
    <ul className="action-list">
               
                <Link to={`/destino/${destino.id}`}>
                  <button>Detalhes</button>
                </Link>
                
              </ul>

              <ul className="action-list editar-btn">
                
               
                  <button  onClick={()=>handleEdit(destino.id)} >Editar</button>
                  </ul>
                <ul className="action-list">
                
                
                  <button onClick={()=>handleDelete(destino.id)}>Deletar</button>
        
              </ul>
        </ul>
    </td>
     <div>
        <td>
            { <ModalEditDestino open={open}
            handleClose={()=>setOpen(false)}
            /> }
        </td>
        <td>
            { <ModalDeleteDestino open={openDelete} 
            handleClose={()=>setOpenDelete(false)}
            /> }
        </td>
    </div> 
    </td>
    
    
    </tr>
    
    ))}
                                
                                
                            </tbody>
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
    
    export default TabelaListarDestino