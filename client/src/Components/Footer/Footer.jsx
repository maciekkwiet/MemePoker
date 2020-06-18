import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footer}>Footer</div>;
};

export default Footer;
