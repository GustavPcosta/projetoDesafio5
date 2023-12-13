
import './style.css';
import NavbarPages from '../../Components/NavBar';
import Cards from '../../Components/CardsPages';
import Footer from '../../Components/Footer';

import loremTravel from '../../assets/lorem-travel.jpg'

function App() {
  return (
    <div className="main">
      <NavbarPages/>

     
      <main className='context-lorem'>
        <div className='content-lorem'>
          <div className='info-main'>
          <h1 className='h1-main'>Lorem travel</h1>
          
          <p className="p-main">O melhor lugar para você agendar seus destinos com melhores preços para quem ta afim de economizar</p>
          </div>
         
          <img src={loremTravel} alt='lorem-travel' className='img-main'></img>
          
        </div>
      
      </main>
      <Cards/>
     <div>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
