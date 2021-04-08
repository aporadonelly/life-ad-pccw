import { createMuiTheme } from '@material-ui/core/styles';

const eMPFdarkCyan = '#0D6A88';
const eMPFlightCyan = '#008B8B';
const blue = '#1E90FF';
const white = '#FFFFFF';
const fontFam = ["Roboto", "Helvetica", "Arial", "sans-serif"];

export default createMuiTheme({
   palette: {
       common: {
           darkCyan: `${eMPFdarkCyan}`,
       },
       primary: {
          main: `${eMPFdarkCyan}`,
       },
       secondary: {
         main: `${eMPFlightCyan}`,
       }
   },
   typography: {
     tab: {
      fontFamily: fontFam,
      textTransform: "none",
      fontSize: "1rem",
     }
   }

});