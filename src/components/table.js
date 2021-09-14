import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:"#3299a8",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
 
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, Age, Job, FieldofStudy, phoneNumber) {
  return { name, Age, Job, FieldofStudy, phoneNumber };
}

const rows = [
  createData('ali hosseini', "24", "teacher", "chemical engineering", "7228844"),



];

const useStyles = makeStyles({
  table: {marginTop:50,
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Job</StyledTableCell>
            <StyledTableCell align="right">Field of Study</StyledTableCell>
            <StyledTableCell align="right">phone number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Age}</StyledTableCell>
              <StyledTableCell align="right">{row.Job}</StyledTableCell>
              <StyledTableCell align="right">{row.FieldofStudy}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
