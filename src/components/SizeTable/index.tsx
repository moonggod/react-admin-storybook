import * as React from 'react';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('S', 159, 6.0, 24, 4.0),
  createData('M', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
interface Record {
    [key: string]: any
}
const GridList:FC<Record> = ({ record }) => {
  const classes = useStyles();
  const name = record.name
  React.useEffect(() => {
    if (name) {
        console.log(1)
    }
  }, [name])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>type</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{record['name']}</TableCell>
              <TableCell align="right">{record['phone']}</TableCell>
              <TableCell align="right">{record['username']}</TableCell>
              <TableCell align="right">{record['email']}</TableCell>
              <TableCell align="right">{record['website']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GridList;
