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
                    <div className="thefront"><img src={OpoI1} alt="Primera opo a elegir" height="280vmin" width="325vmin"/></div>
                    <div className="theback"><a href=""><img src={OpoI1} alt="Primera opo a elegir" height="280vmin" width="325vmin"/></a></div>             
                
                </div>
               
            </div>
        );
    }
}


export default Opos;