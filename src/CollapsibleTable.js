import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const rowsData = [
  {
    name: 'Frozen yoghurt',
    calories: '',
    fat: '',
    history: [
      { name: 'Frozen yoghurt1', calories: '11091700', fat: 3, history: [] },
      { name: 'Frozen yoghurt2', calories: '11091700', fat: 3, history: []  },
    ]
  },
  {
    name: 'Ice cream sandwich',
    calories: '',
    fat: '',
    history: [
      { name: 'Ice cream sandwich1', calories: '11091700', fat: 3, history: []  },
      { name: 'Ice cream sandwich2', calories: '11091700', fat: 3, history: []  },
    ]
  },
  {
    name: 'Eclair',
    calories: '',
    fat: '',
    history: [
      { name: 'Eclair1', calories: '11091700', fat: 3, history: []  },
      { name: 'Eclair2', calories: '11091700', fat: 3, history: []  },
    ]
  },
  {
    name: 'Cupcake',
    calories: '',
    fat: '',
    history: [
      { name: 'Cupcake1', calories: '11091700', fat: 3, history: []  },
      { name: 'Cupcake2', calories: '11091700', fat: 3, history: []  },
    ]
  }
]

export default function CollapsibleTable(props) {
  
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(rowsData);

  const insertArray = function(arr, index, item) {
    return [
        ...arr.slice(0, index),     // first half
        item,                       // items to be inserted
        ...arr.slice(index)         // second half
    ];
  }

  let testList = [...rows]

  function reCreateData(idx) {

    if(!open) {
      for(let j = 0; j < rows[idx].history.length; j++) {
        testList =insertArray(testList, idx+j+1, rows[idx].history[j]);
      }
    }
    setRows(testList);
    setOpen(!open)
  }

  // const reCreateData = (idx) => {
  //   if(!open) {
  //     for(let j = 0; j < rows[idx].history.length; j++) {
  //       testList =insertArray(testList, idx+j+1, rows[idx].history[j]);
  //     }
  //   }
  //   setRows(testList);
  //   setOpen(!open)
  // }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Last Modify</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
              <TableRow className={classes.root} onClick={reCreateData(idx)}>
                <TableCell>
                  <IconButton  size="large" >
                    <DescriptionSharpIcon />
                  </IconButton><br />{row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                {row.fat}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
