import './style.css'
import axios from '../../axios/axios'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function DetalheUsuario(){
    const [usuario,setUsuario] = useState([]);
    let  {id} = useParams()

    async function detalharUsuario(){
        try {
            const response = await axios.get(`/api/Usuarios/${id}`)
            setUsuario(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }


    }
    useEffect(()=>{
        detalharUsuario();
    },[id])
    return(
        <div className='body-detalhe'>
            <div className="height d-flex justify-content-center align-items-center">
      <div className="card p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="mt-2">
            <h4 className="text-uppercase">Usuário selecionado</h4>
            <div className="mt-5">
            <strong>Data do cadastro</strong>
              <h5 className="text-uppercase mb-0">{usuario.dataCadastro}</h5>
              <h1 className="main-heading mt-0">{usuario.name}</h1>
              <div className="d-flex flex-row user-ratings">
                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h6 className="text-muted ml-1">{usuario.email}</h6>
              </div>
            </div>
          </div>
          <div className="image">
            {/* <img
              src="https://i.imgur.com/MGorDUi.png"
              alt="Product"
              width="200"
            /> */}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
          <span>Avalie pela cor</span>
          <div className="colors">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <p></p>

      <Link to="/destino"><button className="btn btn-danger">Cadastro</button></Link>  
      </div>
    </div>
        </div>
    )
}


export default DetalheUsuario