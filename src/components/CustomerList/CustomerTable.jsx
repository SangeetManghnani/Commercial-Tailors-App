import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = {
  root: {
    width: '80%',
    overflowX: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    minWidth: 700,
  },
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(63, 81, 181, 0.18)',
    },
  },
};

let id = 0;
function createData(name, number) {
  id += 1;
  return {
    id, name, number,
  };
}

const data = [
  createData('Sangeet Manghnani', 9599201265),
  createData('Geet Manghnani', 9599201265),
  createData('Sagar Manghnani', 9599201265),
  createData('Yash Soni', 9599201265),
  createData('Mitesh Gupta', 9599201265),
];

function CustomerTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Contact Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.number}</TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomerTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerTable);
