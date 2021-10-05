import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import InformationDisplay from './InformationDisplay'
import IpSearch from './IpSearch'
import bg from '../assets/images/pattern-bg.png'


const useStyle = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100vw',
    height: '26vh',
    background: `url(${bg}) no-repeat`,
    backgroundSize: 'cover'
  },
  text:{
    textAlign: 'center',
    padding: '15px',
    color: 'white',
    fontWeight: 'bold',

  }
}))

const Header = () => {
  const classes = useStyle()


  return (
    <Box className={classes.root} >
      <Typography  component={'h1'} variant={'h6'} className={classes.text} >{'IP Address Tracker'}</Typography>
      <IpSearch />
      <InformationDisplay />      
    </Box>
  )
}

export default Header
