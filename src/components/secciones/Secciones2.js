import React from 'react';
import '../secciones/Secciones.css';

class Dropdown extends React.Component {
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        return (
            <div  className="dropdown" style = {{background:"red",width:"200px"}} >
             <div className="button" onClick={this.showDropdownMenu}> Aulas disponibles </div>
    
              { this.state.displayMenu ? (
              <ul>
                <li><a className="active" href="">Aula 1</a></li>
                <li><a href="">Aula 2</a></li>
                <li><a href="">Aula 3</a></li>
                <li><a href="">Aula 4</a></li>                
             </ul>
            ):
            (
              null
            )
            }    
           </div>    
        );
      }
    }
    
export default Dropdown;
