import './style.css'


function Contato(){
	
    return(
		<body className='contato'>
			<div class="form">
		<div class="title">Bem vindo</div>
		<div class="subtitle">Fale Conosco</div>
		<div class="input-container ic1">
		  <input id="firstname" class="input" type="text" placeholder=" " />
		  <div class="cut"></div>
		  <label for="firstname" class="placeholder">Nome </label>
		</div>
		<div class="input-container ic2">
		  <input id="lastname" class="input" type="text" placeholder=" " />
		  <div class="cut"></div>
		  <label for="lastname" class="placeholder">Sobrenome</label>
		</div>
		<div class="input-container ic2">
		  <input id="email" class="input" type="text" placeholder=" " />
		  <div class="cut cut-short"></div>
		  <label for="email" class="placeholder">Email</label>
		</div>
		{/* <label for="email" class="placeholder">Email</label> */}
		<textarea className='text-area' placeholder='enviar a mensagem'></textarea>
		  <div class="cut cut-short"></div>
		 
		
		<button type="text" class="submit">Enviar</button>
	  </div>
		</body>
		
    )

}


export default Contato