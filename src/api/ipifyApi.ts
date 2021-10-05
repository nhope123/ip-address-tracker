
const API_KEY = process.env.REACT_APP_IPIFY_API_KEY
const IP_URL = 'https://geo.ipify.org/api/v1?apiKey='
console.log(API_KEY);

interface Location {
  country: string,
  region: string,
  city: string,
  lat: number,
  lng: number,
  postalCode: string,
  timezone: string,
  geonameId: number,
}

interface AssignedName {
  asn: number,
  name: string,
  route: string,
  domain: string,
  type: string,
}

interface Proxy {
  proxy: boolean,
  vpn: boolean,
  tor: boolean,
}

export interface IpAddress {
  ip: string,
  location: Location,
  domains?: string[],
  as?: AssignedName,
  isp: string,
  proxy?: Proxy,
}


const fetchWrapper = (url: string) => {
  return fetch(url, {mode: 'cors'})
  .then(res =>{
    if(!res.ok)
      throw new Error(`Failed Request: ${res.status} - ${res.statusText}`);
    
    return res.json();        
  })
}

export const getIpGeoData = (ipAddress: string): Promise<IpAddress> => fetchWrapper(`${IP_URL}${API_KEY}&ipAddress=${ipAddress}`)
  

