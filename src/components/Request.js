import { TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./Request.css"


function Request() {
  return (
 
   <div className='request'> 
       <h1> Request!</h1> 
        <div className='request'>
            <TextField id="outlined-basic" label="first name" variant="outlined" />
            </div>
   <div>
       <TextField id="outlined-basic" label="Last name" variant="outlined" />
   </div>
       
  
  <div className='request'> 
      <TextField id="outlined-basic" label="Phone number" variant="outlined" />
  </div>
  <div className='request'>
      <TextField id="outlined-basic" label="Number of ID" variant="outlined" />
  </div>
   <div className='request'>
       <TextField id="outlined-basic" label="Name of medical" variant="outlined" />
  </div>
 
  <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button >

    </div>
  )
}

export default Request