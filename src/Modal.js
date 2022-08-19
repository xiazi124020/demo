import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CollapsibleTable from './CollapsibleTable'

const useStyles = makeStyles((theme) => ({  
 root: {
    '& > *': {
      margin: theme.spacing(1),
      fontWeight: 'bold'
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: '70vh',
    width: '80vw'
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  return (
    <>
    <button type="button">
        Open Modal
    </button>
    <div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="" variant="outlined" placeholder="search..." style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Button variant="outlined">Create new file</Button>
                    <Button variant="outlined">Create new Folder</Button>
                </Grid>
                <Grid item xs={12}>
                    <CollapsibleTable />
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
    </>
  );
}
