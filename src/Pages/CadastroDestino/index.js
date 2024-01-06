import React, { useState } from 'react';
import axios from '../../axios/axios';
import './style.css'
import { useNavigate } from 'react-router-dom';




const MultiStepForm = () => {

  const[name, setNome] = useState('')
  const [email, setEmail] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [pagamento, setPagamento] = useState(false);
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('')
  //const [numero_casa,setNumeroDaCasa] = useState('')
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  function handlInputChange(e){
    setPagamento(e.target.checked);
  }
  async function handlesubmit(e){
    e.preventDefault();
    
    try {
      if(!name || !email || !sobrenome || !pagamento || !estado || !cep){
        console.log('todos os campos devem ser preenchido')
      }

      const response = await axios.post('/api/Destinoes',{
        name:name,
        sobrenome:sobrenome,
        pagamento:pagamento,
        estado:estado,
        cep:cep,
        email:email,
        
      })
      if(response.data ===200){
				console.log('usuário salvo')
				return;
			  }
        navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  const handleNext = () => {
    setStep((prevStep) => prevStep < 3 ? prevStep + 1 : prevStep);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep > 1 ? prevStep - 1 : prevStep);
  };

  return (
    <div className='destinoPrincipal'>
      <ul className="progressbar">
        <li className={step >= 1 ? 'active' : ''}></li>
        <li className={step >= 2 ? 'active' : ''}></li>
        <li className={step >= 3 ? 'active' : ''}></li>
      </ul>

      <form className='form-destino' onSubmit={handlesubmit}>
        <fieldset style={{ display: step === 1 ? 'block' : 'none' }}>
          <h2 className="fs-title">Cadastro do destino</h2>
          
          <input 
          type="text" 
          name="text" 
          placeholder="Nome"
          onChange={(e)=>setNome(e.target.value)}
           />
          <input 
          type="text" 
          name="pass" 
          placeholder="Sobrenome" 
          onChange={(e)=>setSobrenome(e.target.value)}
          />
          {/* <input type="password" name="cpass" placeholder="Confirm Password" /> */}
          <input 
          type="button" 
          className="next action-button" 
          value="Próximo" onClick={handleNext} />
        </fieldset>

         <fieldset style={{ display: step === 2 ? 'block' : 'none' }}>
          <h2 className="fs-title">Coloque o seu email e a forma de pagamento</h2>
          {/* <h3 className="fs-subtitle">Your presence on the social network</h3> */}
          <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={(e) =>setEmail(e.target.value)}
          />
          <input 
          type="checkbox" 
          name="pagamento" 
          placeholder="Pagamento"
          checked={pagamento}
          onChange={handlInputChange}
          />
          {/* <input type="text" name="gplus" placeholder="Google Plus" /> */}
          <input 
          type="button" 
          className="previous action-button" 
          value="Voltar" 
          onClick={handlePrevious} />
          <input 
          type="button" 
          className="next action-button" 
          value="Próximo" 
          onClick={handleNext} />
        </fieldset> 

        <fieldset style={{ display: step === 3 ? 'block' : 'none' }}>
          <h2 className="fs-title">Coloque o Estado e o Cep</h2>
         
          <input 
          type="text" 
          name="fname" 
          placeholder="Estado" 
          onChange={(e)=>setEstado(e.target.value)}
          />
          <input 
          type="text" 
          name="text" 
          placeholder="Cep" 
          onChange={(e) =>setCep(e.target.value)}
          />
           {/* <input 
           type="text" 
           name="text" 
           placeholder="Número da casa" 
           onChange={(e)=>setNumeroDaCasa(e.target.value)}
           />  */}
          {/* <textarea name="address" placeholder="Address"></textarea> */}
          <input type="button" className="previous action-button" value="Voltar" onClick={handlePrevious} />
          <button  className="submit action-button" target="_top">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MultiStepForm;
