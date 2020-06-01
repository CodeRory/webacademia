import React from 'react';


/* NO USADO  */



import './Dropdown.css';


function Dropdown() {
  return (
    <nav className='dropdown'>         
        <ul className='fourSections'>
          <li><a href="/#">Our teachers</a></li>
          <li><a href="/#">Virtual classroom</a>
            <ul>
              <li><a href="/#">Syllabus</a></li>
              <li><a href="/#">Grups</a></li>
              <li><a href="/#">Schedule</a></li>            
            </ul>         
          </li>          
          <li><a href="/#">Services</a>
            <ul>
              <li><a href="/#">Studies</a></li>
              <li><a href="/#">Languages</a></li>
              <li>
                <a href="/#">More
                <span className="fa fa-plus"></span></a> 
                <ul>
                  <li><a href="/#">Section 1</a></li>
                  <li><a href="/#">Section 2</a></li>
                  <li><a href="/#">Section 3</a></li>
                </ul>                 
              </li>            
            </ul>         
          </li>                      
          <li><a href="/#">Contact</a></li>    
        </ul>    
    </nav>


  )



}
    
export default Dropdown;
