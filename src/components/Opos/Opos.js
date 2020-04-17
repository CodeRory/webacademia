import React from 'react';
import OpoI1 from '../Opos/OpoI1.png';
import OpoI2 from '../Opos/OpoI2.png';
import OpoI3 from '../Opos/OpoI3.png';
import OpoI4 from '../Opos/OpoI4.png';





class Opo1 extends React.Component {
    
    render() {
        return(
            <div>
                <img src={OpoI1} alt="Primera opo a elegir" height="280vmin" width="325vmin"/>      
                <img src={OpoI2} alt="Primera opo a elegir" height="280vmin" width="325vmin"/> 
                <img src={OpoI3} alt="Primera opo a elegir" height="280vmin" width="325vmin"/>
                <img src={OpoI4} alt="Primera opo a elegir" height="280vmin" width="325vmin"/>    
         
            </div>
        );
    }
}

export default Opo1;