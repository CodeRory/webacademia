import React from 'react';

import Contacto from './components/contacto/Contacto';
import Secciones from './components/secciones/Secciones';
import Opos from './components/Opos/Opos';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="contacto">
        <Contacto/>        
      </header>
      <div>
        <Secciones/>
      </div>
      <div>
        <Opos/>
      </div>     
    </div>
    
  );
}

export default App;
