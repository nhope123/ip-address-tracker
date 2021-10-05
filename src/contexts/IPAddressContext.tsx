import React, { createContext, FC, useEffect, useState } from 'react'
import { IpAddress } from '../api/ipifyApi'
import useCurrentLocation from '../helper/useCurrentLocation'
//import {address} from 'ip'
import {ip} from 'address'

interface IPAddressContextProviderState{
  locationData: IpAddress,
  //setIpAddress: React.Dispatch<React.SetStateAction<string>>
}

const IPAddressContext = createContext<IPAddressContextProviderState>(null as never)

const IPAddressContextProvider: FC = (props) => {
  const [selectedIpAddress, setSelectedIpAddress] = useState()
  const [location, setLocationData] = useState<IpAddress>(null as never)

  //const setSelectedIpAddress = ()
  
  useEffect(() => {
    
  }, [])

  return (
    <IPAddressContext.Provider  value={{ 
      locationData: location,
      //setIpAddress: setSelectedIpAddress
     }} >
      {props.children}
    </IPAddressContext.Provider>
  )
}

export default IPAddressContext
export {IPAddressContextProvider}
