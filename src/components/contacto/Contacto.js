import React from 'react';
import phone from '../contacto/phone.png'

/* CONTACTO TIENE SU CSS EN EL GENERAL */

class contacto extends React.Component {
    
    render() {
        return(
            <div>
                <img src={phone} alt="A phone" height="24vh" width="30vw" />
                <h1 style={{color: "orange"}}>555-55-55-55 </h1>
                <h2>L-V 9:00 - 19:00</h2>
            </div>
        );
    }
}

export default contacto;