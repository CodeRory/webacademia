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
      <div>
        <Opo1/>
      </div>
    </div>
  );
}

export default App;
