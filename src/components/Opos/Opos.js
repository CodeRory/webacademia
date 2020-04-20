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
                        <ul id="thebackinformation">
                            <ul id="opo1h1">Oposición 1</ul>
                            <ul><a href="" id="opo1h2">Información</a></ul>
                            <br></br>
                            <ul><a href="" id="opo1h3">Temario y Grupos</a></ul>                                
                        </ul>                         
                    </div>                
                </div>               
            </div>
        );
    }
}


export default Opos;