import { Box, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 60,
    padding: '10px',
    width: '100%',
    wordWrap: 'normal',
    
    [theme.breakpoints.up('sm')]:{
      alignItems: 'flex-start',
      width: '25%',
      height: 90,
      padding: 15,
    }
    
  },
  title:{
    fontSize: '0.6rem',
    color: 'grey',
    
    [theme.breakpoints.up('sm')]:{
      textAlign: 'left',
    }
  },
  content:{
    fontWeight: 'bold',
    
    width: '100%',
    textAlign: 'center',
   
    [theme.breakpoints.up('sm')]:{
      textAlign: 'left',
    }
  }
}))

const Card = () => {
  const classes = useStyles()
  return (
    <Box className={clsx([classes.root])} >
      <Typography className={clsx([classes.title])} component={'div'}  >{'IP ADDRESS'}</Typography>
      <Typography className={clsx([classes.content])} component={'div'}  >{'192.212.174. fsks     101'}</Typography>
    </Box>
  )
}

export default Card
