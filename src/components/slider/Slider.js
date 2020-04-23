import React from 'react';
import '../slider/Slider.css';
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import content from './content'


function Autoplay() {
    return (
        <div>
            <Slider classNames={Slider} autoplay={2500}>
            {content.map((item, index) => (
                <div 
                    key={index}

                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="center">
                        <h1 id="titulo">{item.title}</h1>
                        <p id="descripcion">{item.description}</p>
                        <button id="boton">{item.button}</button>
                    </div>
                </div>
            ))}
            </Slider>
        
        
        </div>
    );
}

export default Autoplay;