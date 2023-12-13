import './style.css'
import axios from '../../axios/axios'
import {useState} from 'react'

import {Link, useNavigate}  from 'react-router-dom';
function CadastroUser(){
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [dataCadastro,setDataCadastro] = useState('');
const navigate = useNavigate();
	async function handleSubmit(e){
		e.preventDefault();
		

		try {
			if(!nome || !senha || !email || !dataCadastro){
      			return;
    		}

			const response = await axios.post('/usuario/save',{
				nome:nome,
				email:email,
				senha:senha,
				dataCadastro:dataCadastro
		  
			  });
			  if(response.data ===200){
				console.log('usuário salvo')
				return;
			  }
			  navigate('/')
		} catch (error) {
			console.log(error)
		}
	}
    return(
        

<body className='register'>
	<div className="main-register">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form onSubmit={handleSubmit}>
					<label className='label-register' for="chk" aria-hidden="true">Cadastro</label>
					<input 
					
					className='input-register' 
					type="text" name="nome" 
					placeholder="nome" 
					required=""
					onChange={(e) =>setNome(e.target.value)}
					/>
					<input 
					className='input-register' 
					type="email" name="email" 
					placeholder="Email" 
					required=""
					onChange={(e) =>setEmail(e.target.value)}
					/>
					<input 
					className='input-register' 
					type="password" name="senha" 
					placeholder="senha" required=""
					onChange={(e) =>setSenha(e.target.value)}
					/>

					<input 
					className='input-register' 
					type="number" name="cadastro" 
					placeholder="data do cadastro" required=""
					onChange={(e) =>setDataCadastro(e.target.value)}
					/>
					<button className='button-register'>Enviar</button>
				</form>
			</div>

			<div class="login">
        <form>
        <label className='label-register' for="chk" aria-hidden="true">Login</label>
					<input className='input-register' type="email" name="email" placeholder="Email" required=""/>
					<input className='input-register' type="password" name="pswd" placeholder="senha" required=""/>
					<button className='button-register'>Enviar </button>
        </form>
					
				
			</div>
	</div>
</body>



    )
}

export default CadastroUser