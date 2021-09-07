import React from 'react'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer'


function App() {
  return(
    <div>

      <div>
        <Header />
      </div>
        
      
      <button type="button">Cargar más tarjetas</button>
      <div className="card-container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
       </div>
      

      <div>
        <Footer />
      </div>

      
    </div>
  )
}

export default App;
