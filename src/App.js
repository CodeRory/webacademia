import React from 'react';

import Contacto from './components/contacto/Contacto';
import Secciones from './components/secciones/Secciones';
import Opo1 from './components/Opos/Opo1';
import Opo2 from './components/Opos/Opo2';
import Opo3 from './components/Opos/Opo3';
import Opo4 from './components/Opos/Opo4';


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
      <a href="">
        <Opo2/>
      </a>
      <a href="">
        <Opo3/>
      </a>
      <a href="">
        <Opo4/>
      </a>
    </div>
  );
}

export default App;
