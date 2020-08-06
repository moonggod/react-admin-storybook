import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core';
import { useQuery } from 'react-admin';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SizeTable = ({ record, myId,source, onDataChange }:any) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState([{
    name:'',
    body:'',
    email:'',
    inputMe:'',
  }])
  
  const { data: recentOrders } = useQuery({ 
        type: 'getManyReference',
        resource: 'comments',
        payload: { 
          id: myId,
          target:'myId',
          pagination:{
            page:1,
            perPage:10
          },
          sort:{},
          filter:{}
        }
    })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idParams = event.target.id.split('-')
    const _formData = [...formData]
    _formData[idParams[0]][idParams[1]] =  event.target.value
    setFormData(_formData)
  };

  React.useEffect(()=>{
    if (recentOrders) {
      const result = recentOrders.map(r => {
        r.inputMe = ''
        return r
      })
      record[source] = null
      setFormData(result)
    }
  },[recentOrders, record, setFormData, source])

  React.useEffect(()=>{
    if (formData && record && source) {
      // onDataChange(formData)
      record[source] = formData
      // console.log(record[source])
    }
  },[formData, record, source])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>type{myId}</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(formData||[]).map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.body}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <TextField id={`${index}-inputMe`} label="Name" value={formData[index].inputMe} onChange={handleChange} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SizeTable;
