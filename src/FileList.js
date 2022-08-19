import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '79vw',
    height: '50vh'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  iconSize: {
    fontSize: 60,
  },
});

export default function FileList() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={3}>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: 'lightgray'}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <div style={{padding: 10}}>
                <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />&nbsp;&nbsp;&nbsp;test
            </div>
            <Grid item xs={3}>
                <Paper className={classes.paper}></Paper>
            </Grid>
        </Grid>
      
      </CardContent>
    </Card>
  );
}
