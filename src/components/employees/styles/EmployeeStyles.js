import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../assets/styleGuide';

const EmployeeStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
    },
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
  gridColumnHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  gridRowHolder: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '1px',
    gridGap: '20px 30px',
    marginBottom: '15px',
  },
  label: {
    marginTop: '-20px',
    fontFamily: 'Roboto',
    color: colors.titleColor,
    fontSize: '26px',
    fontWeight: '700',
    opacity: 1,
    textAlign: 'left',
    height: '30px',
    letterSpacing: '0px',
    padding: '1rem 0 0.5rem',
  },
  subLabel: {
    marginBottom: '5px',
    fontFamily: 'Roboto',
    color: colors.titleColor,
    fontSize: '22px',
    fontWeight: 'Bold',
    opacity: 1,
    textAlign: 'left',
    height: '30px',
    letterSpacing: '0px',
    padding: '1rem 0 0.5rem',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fieldLabel: {
    textAlign: 'left',
    color: '#42526E',
    fontSize: '13px',
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  gender: {
    color: '#EF841F',
    fontSize: '14px',
    fontFamily: 'Roboto',
  },
  textValue: {
    fontFamily: 'Roboto',
    color: '#9D9D9D',
    fontSize: '16px',
    fontStyle: 'italic',
  },
  italicText: {
    fontStyle: 'italic',
  },
  fieldSpacing: {
    paddingRight: '1rem',
  },
  fieldContainer: {
    textAlign: 'left',
    margin: '0.5rem 0',
  },
  selectValidator: {
    '& div>div': {
      padding: '0.7rem',
    },
  },
  rightSpacing: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: '1rem',
    },
  },
  formBtnContainer: {
    marginTop: '10px',
  },
  cancelBtn: {
    margin: theme.spacing(0.5),
    width: '107px',
    height: '38px',
    border: `2px solid ${colors.orange}`,
    letterSpacing: '0.5px',
    opacity: 1,
    backgroundColor: '#EF841F',
    borderRadius: '19px',
    '&:hover': {
      backgroundColor: colors.orange,
      border: `2px solid ${colors.orange}`,
    },
  },
  formBtn: {
    margin: theme.spacing(0.5),
    width: '107px',
    height: '38px',
    border: `2px solid ${colors.orange}`,
    borderRadius: '19px',
    opacity: 1,
    color: '#EF841F',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.white,
      border: `2px solid ${colors.orange}`,
    },
  },
}));
export default EmployeeStyles;
