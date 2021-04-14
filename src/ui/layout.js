import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from '../menu/toolbar';

const useStyles = makeStyles(theme => ({
    page: {
        backgroundColor: "#F3F9F9", // whole page back-ground color
        width: "100%",
    }
}));

const Layout = ({ children }) => {
      const classes = useStyles();

   return (
      <div>
          <Header />
          <div className={classes.page}>
             { children }
          </div>
      </div>
   );
}

export default Layout;