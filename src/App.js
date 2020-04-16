import React from 'react';

import Contacto from './components/contacto/Contacto';
import Secciones from './components/secciones/Secciones';
import Opo1 from './components/Opos/Opo1';


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
      <a href="">
        <Opo1/>
      </a>
      
    </div>
  );
}

export default App;
