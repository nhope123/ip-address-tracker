import React, { useEffect, useState } from 'react'
import { useGeolocation } from 'rooks';
interface Location{
  lon?: number,
  lat?: number
}

const useCurrentLocation = ():Location=> {
  const currentLocation = useGeolocation()
  
  return (!currentLocation?.isError)? ({lon: currentLocation?.lng ,lat: currentLocation?.lat }):
    ({lon:-79.3849,lat: 43.6529})
}

export default useCurrentLocation
