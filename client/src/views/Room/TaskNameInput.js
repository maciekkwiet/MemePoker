import React from 'react';
import { Box, Button, InputLabel, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 2),
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    borderRadius: '5px',
    '& :nth-child(n)': {
      marginRight: theme.spacing(2),
    },
    '& :last-child': {
      marginRight: '0',
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
  },
}));

const CustomInput = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: '5px',
    '& input': {
      padding: theme.spacing(1),
      border: 'none',
    },
  },
}))(InputBase);

const CustomLabel = withStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
}))(InputLabel);

const TaskNameInput = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CustomLabel>Task name:</CustomLabel>
      <CustomInput variant="filled" placeholder="Type a task" />
      <Button className={classes.btn} color="primary" variant="contained">
        Send
      </Button>
    </Box>
  );
};

export default TaskNameInput;
