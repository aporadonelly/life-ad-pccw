import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const styles = {
  root: {
    width: '101px',
    height: '30px',
    backgroundColor: '#2D9FC3',
    borderRadius: '25px',
    opacity: 1,
    // paddingBottom: '1px'
  },
  btn: {
      color: '#FFFFFF',
  }
};

const useStyles = makeStyles(styles);

const CustomButton = ({ label, color }) => {
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
            <Button
              className={classes.btn}
            >
            {label}
            </Button>
        </div>
    );
}

export default CustomButton;