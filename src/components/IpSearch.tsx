import { Button } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'

const IpSearch = () => {
  const [ipInput, setIpInput] = useState<string>('')

  const ipAddress = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  console.log(ipAddress.test('116.42.150.38'));
  
  return (
    <div>
      <form >
        <input type={'text'} value={ipInput} tabIndex={0} onChange={e => setIpInput(e.target.value)} />
        <Button  >
          <KeyboardArrowRight />
        </Button>
      </form>
      
    </div>
  )
}

export default IpSearch
