import React from 'react';

import Contacto from './components/contacto/Contacto';

import Dropdown from './components/dropdown/Dropdown';


import Opos from './components/Opos/Opos';

import Slider from './components/slider/Slider';

import './App.css';




import './App.css';

function App() {
  return (
    <div className="App">
      <header className="contacto">
        <Contacto/>        
      </header>
      <div>
        <Dropdown/>
       
      </div>
      <div>
       <Slider id="slidercss"/>
      </div>
      <div>
        <Opos/>
      </div>  
      <header className="contacto">
        <Contacto/>        
      </header>
      





    </div>
    
    
  );
}

export default App;
