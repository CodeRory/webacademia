import React from 'react';
import phone from '../contacto/phone.png';
import '../contacto/Contacto.css';
import fb from '../contacto/fb.png';
import insta from '../contacto/insta.png';
import tw from '../contacto/tw.png';
/* CONTACTO TIENE SU CSS BACKGROUND EN EL GENERAL */

class contacto extends React.Component {
    
    render() {
        return(
            <div className="barraTop">                
                <h1 style={{color: "orange"}}><img src={phone} alt="A phone" height="18vh" width="25vw" />555-55-55-55</h1>
                <h2 id="horario">L-V 9:00 - 19:00</h2>
                <p className="redes"><img src={fb}  alt="fb" height="25vh" width="25vw" /><img src={tw}  alt="fb" height="25vh" width="25vw" /><img src={insta}  alt="fb" height="25vh" width="25vw" /></p>
            </div>
        );
    }
}

export default contacto;