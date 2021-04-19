import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import EmployeeStyles from '../employees/styles/EmployeeStyles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'uppercase',
  },
}));
export default function Button(props) {
  const classes = { ...EmployeeStyles(), ...useStyles() };
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      variant={variant || 'contained'}
      color={color || 'primary'}
      size={size || 'large'}
      onClick={onClick}
      {...other}
      className={text === 'search' ? classes.cancelBtn : classes.formBtn}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  );
}
