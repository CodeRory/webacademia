import React from 'react';
import './Dropdown.css';

function Dropdown() {
  return (
    <nav>   
      <div className="logo">CodingNepal</div>  
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Features</a>
            <ul>
              <li><a href="">Pages</a></li>
              <li><a href="">Elements</a></li>
              <li><a href="">Icons</a></li>            
            </ul>         
          </li>
          <li>
            <li><a href="">Services</a>
              <ul>
                <li><a href="">Web Design</a></li>
                <li><a href="">App Design</a></li>
                <li>
                  <a href="">More</a>
                  <ul>
                    <li><a href="">Submenu 1</a></li>
                    <li><a href="">Submenu 2</a></li>
                    <li><a href="">Submenu 3</a></li>
                  </ul>                 
                  </li>            
              </ul>         
            </li>         
          </li>  
          <li><a href="">Portfolio</a></li>   
          <li><a href="">Contact</a></li>    
        </ul>    
    </nav>


  )



}
    
export default Dropdown;
