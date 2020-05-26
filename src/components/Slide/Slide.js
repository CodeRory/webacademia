import React from 'react';
import { Slide } from 'react-slideshow-image';

import study1 from '../Slide/study1.png';
import study2 from '../Slide/study2.png';
import study3 from '../Slide/study3.png';
import study4 from '../Slide/study4.png';

import '../Slide/Slide.css';

const slideImages = [
  {study1},
  {study2},
  {study3}
];

const properties = {
  duration: 4000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${study1})`}}>
              <div className='sliderContainer'>
                <div className='textContainer'>
                  <h1 className='sliderTitle'>Lorem Ipsum 1</h1>
                  <h4 className='sliderSub'>Quisque ut orci ornare, euismod eros non, lacinia diam. In ultrices suscipit magna, eget dignissim nunc commodo a.</h4>
                </div>
                <div id='buttonContainer'>
                  <button id='mySecButton'>Contact</button>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${study2})`}}>
            <div className='sliderContainer'>
              <div className='textContainer'>
              <h1 className='sliderTitle'>Lorem Ipsum 2</h1>
              <h4 className='sliderSub'>Quisque sodales sem a sem egestas, a varius nisi luctus. Aliquam erat volutpat. Morbi cursus iaculis.</h4>
              </div>
              <div id='buttonContainer'>
                  <button id='mySecButton'>Subscribe</button>
                </div>
            </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${study3})`}}>
            <div className='sliderContainer'>
            <div className='textContainer'>
              <h1 className='sliderTitle'>Lorem Ipsum 3</h1>
              <h4 className='sliderSub'>Duis interdum tristique ante, eget imperdiet turpis pulvinar at. Mauris laoreet felis at neque viverra, sit amet malesuada enim malesuada.</h4>
              </div>
              <div id='buttonContainer'>
                  <button id='mySecButton'>Reserve</button>
                </div>
            </div>
            </div>            
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${study4})`}}>
            <div className='sliderContainer'>
            <div className='textContainer'>
              <h1 className='sliderTitle'>Lorem Ipsum 4</h1>
              <h4 className='sliderSub'>Aenean facilisis a felis eget aliquet. Vivamus eu pulvinar nibh, eu tristique velit. Nullam rutrum, justo ac porta scelerisque.</h4>
              </div>
              <div id='buttonContainer'>
                  <button id='mySecButton'>More info</button>
                </div>
            </div>
            </div>            
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;