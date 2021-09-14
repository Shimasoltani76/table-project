import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
     
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Name" variant="outlined" />
      <TextField id="filled-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Job" variant="outlined" />
      <TextField id="outlined-basic" label="Field of Study" variant="outlined" />
      <TextField id="outlined-basic" label="phone number" variant="outlined" />
    </form>
  );
}
