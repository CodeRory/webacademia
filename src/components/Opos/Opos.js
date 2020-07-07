import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import '../Opos/Opos.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: 'Porpora',
    textAlign: 'center',
    
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="btn" >
        {props.title}
      </button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} id='fullDialogBar'>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
                Template
            </Typography>            
          </Toolbar>
        </AppBar>
        <div id='textFullDialog'>
            This is just a template. Here you would find a new section of this website.         
        </div>
      </Dialog>
    </div>
  );
}












function Opos(){
    return(
        <main className="page-content">
            <div className="card">
                <div className="content">
                    <h2 className="title">Studies 1</h2>
                    <p className="copy">Aenean velit felis, interdum tristique odio eget, tempor convallis felis. Phasellus et dui purus.</p><FullScreenDialog title='More Information' /></div>
                </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Studies 2</h2>
                    <p className="copy">Proin odio neque, mattis eu augue eu, lacinia lacinia augue. Aliquam euismod nibh quis purus euismod bibendum. </p><FullScreenDialog title='Subscribe' /></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Studies 3</h2>
                    <p className="copy">Pellentesque sit amet luctus sem, sit amet mollis libero. Fusce in maximus lacus.</p><FullScreenDialog title='Reserve' /></div>
            </div>
            <div className="card">
                <div className="content">
                    <h2 className="title">Studies 4</h2>
                    <p className="copy">Maecenas vitae nisi sit amet purus egestas tincidunt sed condimentum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><FullScreenDialog title='Contact' /></div>
            </div>
        </main>
    )
}
 
export default Opos;