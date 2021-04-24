import { makeStyles } from '@material-ui/core/styles';

const EmployeesListStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    listStyle: 'none',
  },
  pageContent: {
    margin: theme.spacing(2.5),
    padding: theme.spacing(3),
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '15px',
    width: '80%',
    float: 'right',
    position: 'relative',
    top: '130px',
    marginBottom: '160px',
  },
  pageContentTable: {
    margin: theme.spacing(2.5),
    padding: theme.spacing(3),
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '15px',
    width: '80%',
    float: 'right',
    position: 'relative',
  },
  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: '#6E55E2',
    color: '#fff',
  },
  chip1: {
    margin: theme.spacing(0.5),
    backgroundColor: '#EA5F63',
    color: '#fff',
  },
  pageHeader: {
    padding: theme.spacing(1),
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(1),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(1),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
    color: '#009CCD',
    fontSize: '26px',
  },
  button: {
    background: '#6E55E2',
    color: '#fff',
    fontSize: '14px',
    opacity: 1,
    textTransform: 'none',
    marginRight: '10px',
    marginRLeft: '4px',
    borderRadius: '16px',
    pointerEvents: 'none',
  },
  test: {
    width: '200px',
    display: 'inline-block',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    margin: '0px 10px',
    clear: 'both',
  },
}));
export default EmployeesListStyles;
