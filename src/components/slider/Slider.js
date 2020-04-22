import React from 'react';
import slider1 from '../slider/slider1.png';
import slider2 from '../slider/slider2.png';
import slider3 from '../slider/slider3.png';
import slider4 from '../slider/slider4.png';



class Slider extends React.Component {

    render(){
        return(
            <div className="slider">
                <ul id="sliderul">
                    <li><img src={slider1} alt="El primer slider"/></li>
                    <li><img src={slider2} alt="El segundo slider"/></li>
                    <li><img src={slider3} alt="El tercer slider"/></li>
                    <li><img src={slider4} alt="El cuarto slider"/></li>             
                </ul>            
            </div>
        )
    }
}

export default Slider;