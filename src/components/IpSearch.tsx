import { Box, Button, Input, makeStyles } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useGeolocation } from 'rooks'
import useCurrentLocation from '../helper/useCurrentLocation'
import {ip} from 'address'
import { classicNameResolver } from 'typescript'
import clsx from 'clsx'

const useStyle = makeStyles((theme) => ({
  "MuiInput-underline":{

    "&:hover:not(.Mui-disabled):before":{
      borderBottom: '0px solid rgba(0, 0, 0, 0.42)'
    },
    "&:before":{
      borderBottom: '0px solid rgba(0, 0, 0, 0.42)'
    },
    "&:after":{
      borderBottom: '0px solid rgba(0, 0, 0, 0.42)'
    },

  },

  root:{
    width: '85%',
    maxWidth: '500px',
    height: 'auto',
    //borderRadius: '15px',
    //border: '2px solid red',
  },
  inputElement:{
    width: 'calc(100% - 65px)',
    height: '100%',
    padding: '5px 10px',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    border: '2px solid white',
    "&:active":{
      border: '2px solid red',
    }

  },
  submit:{
    display: 'inline-block',
    width: 45,
    height: '100%',
    border: '2px solid black',
    backgroundColor: 'black',
    color: 'white',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover":{
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    "&:active":{
      border: '2px inset red',
      boxShadow: '3px 3px 5px grey',
    }
  },
  arrow:{
    color: 'white',
    fontWeight: 'bold',
  }
  
}))

const placeholder = 'Search for any IP address or domain'

const IpSearch = () => {
  const [ipInput, setIpInput] = useState<string>('')
  //const [location, useLocation] = useCurrentLocation()

  const classes = useStyle()
  const ipAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  const domain = /^((?!-)[A-Za-z0-9-]{1, 63}(?<!-)\\.)+[A-Za-z]{2, 6}$/
  
 
  return (
    <Box className={classes.root} >
      <form >
        <Input 
          className={ clsx([classes.inputElement, classes['MuiInput-underline']]) }
          autoFocus
          inputComponent={'input'}
          placeholder={placeholder}
          type={'text'}
          value={ipInput} 
          tabIndex={0} 
          onChange={e => setIpInput(e.target.value)} />
        <Button className={classes.submit} >
          <KeyboardArrowRight className={classes.arrow} />
        </Button>
      </form>
      
    </Box >
  )
}

export default IpSearch
