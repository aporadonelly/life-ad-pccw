import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../../../assets/styleGuide';

const EmployeeStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
    },
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
    fontWeight: 'Bold',
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
    fontWeight: 'normal',
  },
  gender: {
    color: '#EF841F',
    fontSize: '16px',
    fontFamily: 'Roboto',
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
    width: '107px',
    height: '38px',
    marginTop: '10px',
    border: `2px solid ${colors.orange}`,
    color: '#FFFFFF',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    opacity: 1,
    backgroundColor: '#EF841F',
    borderRadius: '19px',
    '&:hover': {
      backgroundColor: colors.orange,
      border: `2px solid ${colors.orange}`,
    },
  },
  formBtn: {
    width: '107px',
    height: '38px',
    marginTop: '10px',
    border: `2px solid ${colors.orange}`,
    borderRadius: '19px',
    opacity: 1,
    color: '#EF841F',
    textTransform: 'uppercase',
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.white,
      border: `2px solid ${colors.orange}`,
    },
  },
}));
export default EmployeeStyles;
