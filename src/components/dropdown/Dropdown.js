import React from 'react';
import './Dropdown.css';

function Dropdown() {
  return (
    <nav>   
      <div className="logo">Academia Yorel</div>  
        <ul>
          <li><a href="">Profesorado</a></li>
          <li><a href="">Aula Virtual</a>
            <ul>
              <li><a href="">Temario</a></li>
              <li><a href="">Grupos</a></li>
              <li><a href="">Horario</a></li>            
            </ul>         
          </li>
          <li>
            <li><a href="">Servicios</a>
              <ul>
                <li><a href="">Oposiciones</a></li>
                <li><a href="">Inglés</a></li>
                <li>
                  <a href="">More
                  <span className="fa fa-plus"></span></a> 
                  <ul>
                    <li><a href="">Refuerzo 1</a></li>
                    <li><a href="">Refuerzo 2</a></li>
                    <li><a href="">Refuerzo 3</a></li>
                  </ul>                 
                  </li>            
              </ul>         
            </li>         
          </li>              
          <li><a href="">Contacto</a></li>    
        </ul>    
    </nav>


  )



}
    
export default Dropdown;
