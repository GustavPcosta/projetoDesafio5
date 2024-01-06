import './style.css'
import viagens from '../../assets/viagens-destino.jpg'
import tarifas from '../../assets/tarifas.jpg'
import comidas from '../../assets/comidas.jpg'
import imgBackground from '../../assets/cadastro-travellers.jpg'
import { Link } from 'react-router-dom';
function Cards(){
    return(
        <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure> 
              <img src={viagens} alt="" />
            </figure>
            <div class="article-body">
              <h2>Destino</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="cadastro" class="read-more">
                 <span class="sr-only">Faça o seu cadastro</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
      
          <div class="article-wrapper">
            <figure>
              <img src={tarifas} alt="" />
            </figure>
            <div class="article-body">
              <h2>Melhores tarifas do ano</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="cadastro" class="read-more">
               <Link to='/cadastro'>Faça o seu cadastro</Link>
                 <span class="sr-only"></span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
      
          <div class="article-wrapper">
            <figure>
              <img src={comidas} alt="" />
            </figure>
            <div class="article-body">
              <h2>Melhores comidas</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
              </p>
              <a href="cadastro" class="read-more">
                 <span class="sr-only">Faça o seu cadastro</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    )
}

export default Cards