import { useState } from 'react'
import axios from '../../axios/axios'
import './style.css'


function ModalEditDestino({open,handleClose})
{
const [id, setId] = useState('')
const [name,setName] = useState('');
const [sobrenome,setSobrenome] = useState('')
const [pagamento,setPagamento] = useState(false)
const [estado,setEstado] = useState('')
const [cep,setCep] = useState('')
const [email,setEmail] = useState('')

    async function handleSubmit(e){
        //e.preventDefault();
        
        try {
            const response = await axios.put(`/api/Destinoes/${id}`,{
            
        id:id,
        name:name,
        sobrenome:sobrenome,
        pagamento:pagamento,
        estado:estado,
        cep:cep,
        email:email,

            })
            console.error(response.data)
            if(response.status >204)
                return;
        
            alert('Destino atualizado com sucesso')

            setCep(' ')
            setName(' ')
            setEstado(' ')
            setPagamento(' ')
            setSobrenome (' ')
            setEmail(' ')
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        
        { open &&
        
        
        <div className='backdrop-catador'> 
        <div className='modal-catador modal-add-catador'> 
            <h2>Editar Destino</h2>

        <form onSubmit={handleSubmit} className='form-edit-catador'>
        <input 
            type="text" 
            placeholder='Nome'
             value={name} 
             onChange={(e) => setName(e.target.value)}
             /> 
           
             <input 
            type="number" 
            placeholder='CEP'
             value={cep} 
             onChange={(e) => setCep(e.target.value)}
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
            type="text" 
            placeholder='Estado'
             value={estado} 
             onChange={(e) => setEstado(e.target.value)}
             /> 


            <input 
            type="checkbox" 
            placeholder='forma de pagamento'
             value={pagamento} 
             onChange={(e) => setPagamento(e.target.checked)}
             /> 



           

            <input 
            type="name" 
            placeholder='Sobrenome'
             value={sobrenome} 
             onChange={(e) => setSobrenome(e.target.value)}
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

export default ModalEditDestino