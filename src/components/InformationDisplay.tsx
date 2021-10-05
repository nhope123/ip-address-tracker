import { Box, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    zIndex: 24,
    width: '85%',
    border: '0px solid white',
    borderRadius: '15px',
    top: '20px',
    padding: '5px 0px',
    boxShadow: '3px 3px 8px rgba(0,0,0,0.4)',

    [theme.breakpoints.up('sm')]:{
      flexDirection: 'row',
      maxWidth: 800,
      top: '50px',
      border: '1px solid white',
    borderRadius: '15px',
      backgroundColor: 'white',
    }
  },
}))

const InformationDisplay = () => {
  const classes = useStyles()

  return (
    <Box className={clsx([classes.root])} >
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  )
}

export default InformationDisplay
