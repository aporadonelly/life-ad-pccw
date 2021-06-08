import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  activeSortIcon: {
    opacity: 1,
    color: '#2D9FC3 !important'
  },
  inActiveSortIcon: {
    opacity: 0.2,
  },
  tableHeaderRoot: {
    borderBottom: 'none',
    marginLeft: '20px'
  },
  tableHeadAlign: {
    padding: '0px 0px 0px 0px',
  },
}));

export default useStyles;