import React from 'react';
import { Slide } from 'react-slideshow-image';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import study1 from '../Slide/study1.png';
import study2 from '../Slide/study2.png';
import study3 from '../Slide/study3.png';
import study4 from '../Slide/study4.png';



import '../Slide/Slide.css';






function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button id='mySecButton' onClick={handleClickOpen} style={{fontFamily: 'Porpora'}}>
        {props.title}
      </button>
      <Dialog open={open} onClose={handleClose} id="titleDialogSlider" >
        <h2 id="titleDialogSliderText" DialogTitle={{ style: { fontFamily: 'Porpora !important'} }}>Template</h2>
        <DialogContent>
          <DialogContentText id='subDialogSliderText'>
            This web shows how could be a website for a business, in this case, an academy. 
            Maybe in these sections you would be ask for your email. 
          </DialogContentText>
          <TextField 
            autoFocus
            /* input + label props, podría ser sólo inputprops */
            InputLabelProps={{ style: { fontFamily: 'Porpora', 
                                        color:'black',
                                         
                                        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                                          border: "2px solid",
                                          borderColor: "black !important",
                                        },
                                      } }}           
            
            label="Enter your email please"
            type="email"
            fullWidth
            hoverColor='black'            
            id='textFieldSliderDialog'
            multiline='false'
                
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id="myButtonDialogSlider" >
            Cancel
          </Button>
          <Button onClick={handleClose} id="myButtonDialogSlider">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



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
                  <FormDialog title='Contact' />
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
                  <FormDialog title='Subscribe' />
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
                  <FormDialog title='Reserve' />
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
                <FormDialog title='More info' />
                </div>
            </div>
            </div>            
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;