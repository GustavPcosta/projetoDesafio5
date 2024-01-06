import { useState } from 'react'
import axios from '../../axios/axios'
import './style.css'


function ModalEditUsuario({open,handleClose})
{
const [id, setId] = useState('')
const [name,setName] = useState('');
const [dataCadastro,SetData] = useState('')
const [senha,setSenha] = useState('')
const [email,setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const response = await axios.put(`/api/Usuarios/${id}`,{
            
        id:id,
        name:name,
        dataCadastro:dataCadastro,
        senha:senha,
        email:email

            })
            console.error(response.data)
            if(response.status >204)
                return;
        
            alert('Usuário atualizado com sucesso')

            setEmail(' ')
            setName(' ')
            SetData(' ')
            setSenha(' ')
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        
        { open &&
        
        
        <div className='backdrop-catador'> 
        <div className='modal-catador modal-add-catador'> 
            <h2>Editar Usuário</h2>

        <form onSubmit={handleSubmit} className='form-edit-catador'>
        <input 
            type="text" 
            placeholder='Nome'
             value={name} 
             onChange={(e) => setName(e.target.value)}
             /> 
           
             <input 
            type="date" 
            placeholder='data'
             value={dataCadastro} 
             onChange={(e) => SetData(e.target.value)}
             />
             <input 
            type="email" 
            placeholder='Email'
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             />

             <input 
            type="number" 
            placeholder='Passe a identificação'
             value={id} 
             onChange={(e) => setId(e.target.value)}
             />  

            <input 
            type="password" 
            placeholder='Senha'
             value={senha} 
             onChange={(e) => setSenha(e.target.value)}
             /> 




            <div className='btn-buttons'> 
            <button className='color-green'>Salvar</button>
            <button className='color-redd' onClick={handleClose}>Cancelar</button>
            </div>
        </form>


        </div>
      </div>

        
        
        
        
        }
        
        
        </>
    )
}

export default ModalEditUsuario