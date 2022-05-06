import { TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./Help.css"


function m() {
  return (
 
   <div className='help'> 
       <h1> Help!</h1> 
        <div className='help'>
            <TextField id="outlined-basic" label="first name" variant="outlined" />
            </div>
   <div>
       <TextField id="outlined-basic" label="Last name" variant="outlined" />
   </div>
       
  
  <div className='help'> 
      <TextField id="outlined-basic" label="Phone number" variant="outlined" />
  </div>
  <div className='help'>
      <TextField id="outlined-basic" label="Number of ID" variant="outlined" />
  </div>
   <div className='help'>
       <TextField id="outlined-basic" label="Name of medical" variant="outlined" />
  </div>
 
  <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button >

    </div>
  )
}

export default m