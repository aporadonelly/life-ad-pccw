import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { Search as SearchIcon, Close as CloseIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[700],
    borderRadius: 40,
    backgroundColor: theme.palette.common.white,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    '&:hover > div > input': {
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(62),
      },
    },
    zIndex: 1,
  },
  searchIcon: {
    color: theme.palette.grey[700],
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'all',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  closeIcon: {
    color: theme.palette.grey[700],
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    pointerEvents: 'all',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(20),
    },
  },
}));

const AnimatedSearchBar = ({ onSearch, onClear, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}>
        <SearchIcon fontSize="small" onClick={onSearch} />
      </div>
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        {...props}
      />
      <div className={classes.closeIcon}>
        <CloseIcon fontSize="small" onClick={onClear} />
      </div>
    </div>
  );
};

AnimatedSearchBar.defaultProps = {
  onSearch: noop,
  onClear: noop,
};

AnimatedSearchBar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
};

export default AnimatedSearchBar;
