import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FileDialog(props) {

  const [contents, setContents] = useState()
  const [name, setName] = useState()
  const addFile = () => {
    props.addFile(contents, name)
  }
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.kbn === 1 ?"New folder": "New file"}</DialogTitle>
        <DialogContent>
          <hr height={1} width={500} />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="name"
            label=""
            type="email"
            value={name}
            fullWidth
            onChange={(event) => {setName(event.target.value)}}
          />
          {
            props.kbn === 0 ? 
            <TextField
              style={{marginTop: 10}}
              label=""
              multiline
              fullWidth
              rows={6}
              value={contents}
              variant="outlined"
              onChange={(event) => {setContents(event.target.value)}}
            />: ""
          }
          
        </DialogContent>


        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addFile} variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
