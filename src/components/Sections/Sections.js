/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import '../Sections/Sections.css';
import { CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


function AlertDialog(props) {
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Button id='navSections' onClick={handleClickOpen2}>
        {props.section}
      </Button>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2 id='sectionDialogTitle'>{props.title}</h2>
        <DialogContent>
          <DialogContentText id="contentSectionDialog">
            Here you would be sent to another section of this business website.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button id='buttonSectionDialog' onClick={handleClose2} >
            Ok
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function SimpleDialog(props) {  
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };  

  return (
    <Dialog onClose={handleClose} open={open} >      
      <h2 id="titleLogIn">Log in with your account</h2>      
      <List id='emailsLogIn'>        
        <div id="inputUsername">          
          🌍<input type="text" id="inputUsername" placeholder="Username"/>
        </div>       
        <div className="inputUsername">						
						🔑<input type="password" id="inputUsername" placeholder="Password"/>
				</div>
        <div className="checkboxPassword">            
            <input type="checkbox" id="cbox2" value="second_checkbox"/> <label for="cbox2">Remember me</label>
        </div>        
        <div className="buttonLogIn">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>        
      </List>      
      <div>
        <div className="cardFooter">
          <div id="singUp" style={{fontFamily: 'Porpora'}}>
            Don't have an account?<a href="/#" style={{color: 'white', marginLeft: '4px', fontFamily: 'Porpora'}}>Sign Up</a>
          </div>
          <div id="forgot">
            <a href="/#" style={{color: 'white', marginLeft: '4px', fontFamily: 'Porpora'}}>Forgot your password?</a>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    
  };

  return (
    <div>      
      <Button onClick={handleClickOpen} style={{color: 'white', textTransform: 'none', fontFamily: 'Porpora'}} >
        Log In
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}





/* -------------------Sections--------------------------------------------
 */
export default function Sections() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  
  return (
    <header className="Header">
      <button id='myButton'><SimpleDialogDemo /></button>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <AlertDialog section='Teachers' title='Teachers' />
          <AlertDialog section='Studies' title='Studies' />
          <AlertDialog section='Virtual Classroom' title='Virtual Classroom' />
          <AlertDialog section='Syllabus' title='Syllabus' />  
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Book" style={{color: 'white'}}>
        📕
      </button>
    </header>
  );
}
