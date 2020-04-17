import React from 'react';

import Contacto from './components/contacto/Contacto';
import Secciones from './components/secciones/Secciones';
import Secciones2 from './components/secciones/Secciones2';
import Secciones3 from './components/secciones/Secciones3';
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
        <Secciones2/>
        <button className="aulaVirtual">Aula Virtual</button>
        <Secciones3/>

      </div>
      <div>
        <Opos/>
      </div>     
    </div>
    
  );
}

export default App;
