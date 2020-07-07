import React from 'react';
/* import Dropdown from './components/dropdown/Dropdown'; */
import Opos from './components/Opos/Opos';
import Final from './components/final/Final';
import PersistentDrawerLeft from './components/Drawer/Drawer';
import Slideshow from './components/Slide/Slide';
import Sections from './components/Sections/Sections';

import './App.css';


function App() {
  return (
    <div className="App">
      <div id="header">
        <div className='first'>
          <PersistentDrawerLeft />     
        </div>  
        <div className='second'>
          <Sections />
        </div>
      </div>
      <div>
        <Slideshow />
      </div>
      <div>
        <Opos/>
      </div>  
      <bottom className="final">
        <Final/>        
      </bottom>
    </div>   
    
  );
}

export default App;
