import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';

import '../Drawer/Drawer.css';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',    
    maxHeight: '70px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }, 
 
  
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  
  

  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" id="drawer">
        <Toolbar> 
            <div id='contact'>
                <div id='phone'>
                    <PhoneIcon style={{color: 'orange', width: '20px', height: '48px'}}/>
                    <p style={{color: 'orange', fontStyle: 'bolder'}}>555-55-55-55</p>            
                </div>
                <div id='schedule'>
                    <p>M-F 10:00-14:00 / 17:00-20:15 </p>                
                </div>
            </div>
          <div id='yorel' style={{border: 'radius'}}>
            Yorel Academy
          </div>
        </Toolbar>
      </AppBar>     
    </div>
  );
}
