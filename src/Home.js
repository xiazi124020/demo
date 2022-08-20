import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import HomeIcon from '@material-ui/icons/Home';
import _ from 'lodash';
import FileDialog from './FileDialog';
import moment from 'moment'
import {datas, numberWithCommas} from './Constants'

const useStyles = makeStyles((theme) => ({  
    root: {
       '& > *': {
         margin: theme.spacing(0),
         fontWeight: 'bold'
       },
     },
     button: {
        '& > *': {
          margin: theme.spacing(3),
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
     },
   }));

export default function Home() {
    const classes = useStyles();    
    const [currentFiles, setCurrentFiles] = useState([]);
    const [directory, setDirectory] = useState([])
    const [searchKey, setSearchKey] = useState();
    const [open, setOpen] = useState(false);
    const [kbn, setKbn] = useState();
  
    const handleClickOpen = (value) => {
      setOpen(true);
      setKbn(value)
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    let timer = 0;
    let delay = 200;
    let prevent = false;

    useEffect(() => {
        let store_files = localStorage.getItem("datas");
        if(store_files === null) {
            localStorage.setItem("datas", JSON.stringify(datas));
            setCurrentFiles(datas)
            sessionStorage.setItem("currentFile", JSON.stringify(datas))
        } else {
            setCurrentFiles(JSON.parse(store_files))
            sessionStorage.setItem("currentFile", store_files)
        }
      }, []);

    const onSingleClickHandler = (select_datas, idx) => {
      timer = setTimeout(() => {
        if (!prevent) {
            // setDirectory([...directory, select_datas.name])
        }
      }, delay);
    };

    const onDoubleClickHandler = (select_datas) => {
      clearTimeout(timer);
      prevent = true;
      let temp_obj = {};
      temp_obj.id = select_datas.id
      temp_obj.name = select_datas.name
      setCurrentFiles(select_datas.datas)
      setDirectory([...directory, temp_obj])
      sessionStorage.setItem("currentFile", JSON.stringify(select_datas.datas))
    };

    const back2home = () => {
        setCurrentFiles(datas)
        setDirectory([])
        sessionStorage.setItem("currentFile", JSON.stringify(datas))
    }

    const find_child = (target, data, kbn) => {
        let ret_obj;
        _.forEach(target, function(temp) {
            if(temp.id === data.id) {
                if(kbn === 1) {
                    ret_obj = temp 
                } else {
                    ret_obj = temp.datas
                }
                return false
            } else {
                if(temp.datas.length > 0) {
                    find_child(temp.datas, data, kbn);
                }
                
            }
        });
        return ret_obj
    }

    const handleClick = (data) => {
        let temp_files = find_child(data)
        setCurrentFiles(temp_files);
        sessionStorage.setItem("currentFile", JSON.stringify(temp_files))
        let idx = _.findIndex(datas, function(o) { return o.id === data.id; });
        setDirectory([...directory.slice(0, idx -1 )])
    }

    let ret_obj = [];
    const search_files = (target, key_word) => {
        _.forEach(target, function(temp) {
            if(_.includes(temp.name, key_word)) {
                ret_obj.push(temp)
                if(temp.datas.length !== 0) {
                    search_files(temp.datas, key_word)
                }
            }
        });
        return ret_obj
    }

    const handleChange = (event) => {
        setSearchKey(event.target.value);
        let search_target = JSON.parse(sessionStorage.getItem("currentFile"))
        if(event.target.value === "") {
            setCurrentFiles(search_target) 
        } else {
            setCurrentFiles(search_files(search_target, event.target.value)) 
        }
    };

    const addFile = (temp_contents ,temp_name) => {
        const data = {
            id: Math.floor(Math.random() * 10000),
            name: temp_name,
            file_kbn: kbn,
            last_modify: kbn === 1 ? "" : moment(new Date()).format('YYYY/MM/DD HH:mm:ss'),
            size: kbn === 1 ? "": Buffer.byteLength(temp_contents, "utf-8"),
            contents: temp_contents,
            datas:[]
        }
        setCurrentFiles([...currentFiles, data])
        let idx = _.findIndex(datas, function(o) { return o.id === data.id; });
        handleClose()
    }
    
    return(
        <>
            <div className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="" value={searchKey} onChange={handleChange} variant="outlined" placeholder="search..." style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={12} className={classes.root} >
                        <Button variant="outlined" onClick={() => {handleClickOpen(0)}}>Create new file</Button>
                        <Button style={{marginLeft: 10}} variant="outlined" onClick={() => {handleClickOpen(1)}}>Create new Folder</Button>
                    </Grid>
                    <Grid item xs={12} className={classes.root}>
                        <Breadcrumbs aria-label="breadcrumb" style={{fontSize: 30}}>
                        <Link color="inherit" onClick={back2home} style={{fontSize: 30}}>
                            <HomeIcon />
                        </Link>
                        {directory.map((data, idx) => (
                            idx !== directory.length - 1 ?
                            <Link color="inherit" onClick={() => {handleClick(data);}} style={{fontSize: 30}}>
                                {data.name}
                            </Link>:
                            <Typography color="textPrimary" style={{fontSize: 30}}>{data.name}</Typography>
                        ))}
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={4} className={classes.root}>
                        <Typography variant="h3">
                            File
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.root}>
                        <Typography variant="h3">
                            Size(byte)
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.root}>
                        <Typography variant="h3">
                            Last modify
                        </Typography>
                    </Grid>
                    {currentFiles.map((data, idx) => (
                        <>
                        {
                            data.file_kbn === 1 ? <>
                                <Grid item xs={4} onClick={() => {onSingleClickHandler(data, idx)}} onDoubleClick={() => {onDoubleClickHandler(data)}}>
                                    <Typography variant="h6">
                                        <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />{data.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography variant="h6">
                                        {data.size === 0 ? "": numberWithCommas(data.size + "")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography variant="h6">
                                        {data.last_modify}
                                    </Typography>
                                </Grid></>: <><Grid item xs={4} >
                                    <Typography variant="h6">
                                        <InsertDriveFileOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />{data.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography variant="h6">
                                    {data.size === 0 ? "": numberWithCommas(data.size + "")}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6">
                                        {data.last_modify}
                                    </Typography>
                                </Grid></>
                        }
                        <Grid item xs={12} className={classes.root}>
                            <hr height="1" />
                        </Grid>
                        </>
                    ))}
                </Grid>
            </div>
            <FileDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} kbn={kbn} addFile={addFile} />
        </>
    )
} 