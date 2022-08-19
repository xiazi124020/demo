

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

const useStyles = makeStyles((theme) => ({  
    root: {
       '& > *': {
         margin: theme.spacing(0),
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

const datas = [
	{
		id: 1,
        name: "fd001",
		file_kbn: 1,
        last_modify: "",
        size: 0,
		datas:
		[
			{
                id: 2,
                name: 'f001',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 3,
                name: 'f002',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 4,
                name: 'f003',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 5,
                name: 'f004',
				file_kbn: 1,
                last_modify: "",
				size: 0,
				datas:
				[
					{
                        id: 6,
                        name: 'f005',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500,
                        datas:[]
					},
					{
                        id: 7,
                        name: 'f006',
                        file_kbn: 0,
                        last_modify: "2020/01/02 12:12:10",
                        size: 500,
                        datas:[]
					},
				]
			},
		],
	},
	{
        id: 8,
        name: 'fd002',
        file_kbn: 1,
        last_modify: "",
        size: 0,
        datas:
		[
			{
                id: 9,
                name: 'f007',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 10,
                name: 'f008',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
			{
                id: 11,
                name: 'f009',
				file_kbn: 0,
                last_modify: "2020/01/02 12:12:10",
				size: 500,
				datas:[]
			},
		]
	},
	{
        id: 11,
        name: 'f003',
        file_kbn: 0,
        last_modify: "2020/01/02 12:12:10",
        size: 500,
        datas:[]
	},
]

export default function Home() {
    const classes = useStyles();    
    const [currentFiles, setCurrentFiles] = useState(datas);
    const [directory, setDirectory] = useState([])
    let timer = 0;
    let delay = 200;
    let prevent = false;

    const onSingleClickHandler = (select_datas, idx) => {
      timer = setTimeout(() => {
        if (!prevent) {
            setDirectory([...directory, select_datas.name])
        }
      }, delay);
    };
    const onDoubleClickHandler = (select_datas, idx) => {
      clearTimeout(timer);
      prevent = true;
      setCurrentFiles(select_datas.datas)
      setDirectory([...directory, select_datas.name])
    };

    const back2home = () => {
        setCurrentFiles(datas)
    }

    const handleClick = (event) => {
        console.info('You clicked a breadcrumb.');
    }

    return(
        <>
            <div className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="" variant="outlined" placeholder="search..." style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Button variant="outlined">Create new file</Button>
                    <Button variant="outlined" style={{marginLeft: 3}}>Create new Folder</Button>
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Breadcrumbs aria-label="breadcrumb" style={{fontSize: 30}}>
                    <Link color="inherit" onClick={back2home} style={{fontSize: 30}}>
                        <HomeIcon />
                    </Link>
                    {directory.map((data, idx) => (
                        idx == directory.length ?
                        <Link color="inherit" href="/" onClick={handleClick} style={{fontSize: 30}}>
                            {data}
                        </Link>:
                        <Typography color="textPrimary" style={{fontSize: 30}}>{data}</Typography>
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
                        Size
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
                        data.file_kbn == 1 ? <>
                            <Grid item xs={4} onClick={() => {onSingleClickHandler(data, idx)}} onDoubleClick={() => {onDoubleClickHandler(data, idx)}}>
                                <Typography variant="h6">
                                    <FolderOpenOutlinedIcon style={{fontSize: 50, border: 1, backgroundColor: ''}}/><br />{data.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant="h6">
                                    {data.size === 0 ? "": data.size}
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
                                {data.size === 0 ? "": data.size}
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
        </>
    )
} 