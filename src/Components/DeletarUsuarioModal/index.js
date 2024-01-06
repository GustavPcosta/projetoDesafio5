import { useState } from 'react'
import './style.css'
import axios from '../../axios/axios'


function ModalDeleteUsuario({open, handleClose}){
    const [id, setId] = useState('')

    async function handleSubmit(){
        try {
            const response = await axios.delete(`/api/Usuarios/${id}`,{
                id
            })
            if(response.status > 204){
               alert('deletado com sucesso')
               setId(' ')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        { open &&
           <form onSubmit={handleSubmit} className='delete-area'>
           
   
           <div>
           
           </div>
           <div className='body-delete'>
           <h4>Deletar Usuário</h4>
           <input value={id} onChange={(e) => setId(e.target.value)} type="number" placeholder='Insira o identificador de exclusão'></input>
           <div className='content-button'>
           <button className='btn-confirmar'>Confirmar</button>
           <button className='btn-cancelar' onClick={handleClose}>Cancelar</button>
           </div>
           </div>
           
        </form>
        }
        
        
        
        
        
        
        </>
    )
}

export default ModalDeleteUsuario