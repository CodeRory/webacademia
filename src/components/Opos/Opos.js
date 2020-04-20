import React from 'react';
import OpoI1 from '../Opos/OpoI1.png';
import OpoI2 from '../Opos/OpoI2.png';
import OpoI3 from '../Opos/OpoI3.png';
import OpoI4 from '../Opos/OpoI4.png';
import '../Opos/Opos.css';





class Opos extends React.Component {
    
    render() {
        return(
            <div className="maincontainer">
                <div className="thecard">
                    <div className="thefront"><img src={OpoI1} alt="Primera opo a elegir" height="320px" width="320px"/></div>
                    <div className="theback">
                        <ul className="thebackinformation">
                            <h1 id="opo1h1"><strong>Oposición 1</strong></h1>
                            <h2><a href="">Información</a></h2>
                            <h3><a href="">Temario y Grupos</a></h3>
                                
                        </ul>                         
                    </div>                
                </div>               
            </div>
        );
    }
}


export default Opos;