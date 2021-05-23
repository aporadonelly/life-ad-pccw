import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../assets/styleGuide'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: 'uppercase',
  },
  btn: {
    margin: theme.spacing(0.5),
    width: '107px',
    height: '38px',
    borderRadius: '19px',
    opacity: 1,
    color: '#FFFFFF',
    backgroundColor: colors.orange,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    textAlign: "center",
    '&:hover': {
      backgroundColor: colors.orange,
    },
  },
}))
export default function Button(props) {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props

  return (
    <MuiButton
      variant={variant || 'contained'}
      color={color || 'primary'}
      size={size || 'large'}
      onClick={onClick}
      {...other}
      className={text === 'edit' ? classes.btn : classes.btn}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {text}
    </MuiButton>
  )
}
