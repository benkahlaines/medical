import React from 'react'
import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import "./Wishlist.css"

const Wilaya = [
  {label: '1 - Adrar'},
{label: '2 - Chlef' },
{label: '3 - Laghouat'},
{label: '4 - Oum bouaghi' },
{ label: '5 - Batna'},
{label:  '6 - Bejaia'},
{ label: '7 - Biskra'},
{label:  '8 - Bechar'},
{label: '9 - Blida' },
{ label: '10 - Bouira'},
{label: '11 - Tamanrasset' },
{label: '12 - Tebessa' },
{label:  '13 - Tlemcen'},
{label: '14 - Tiaret' },
{label:  '15 - Tizi ouzou'},
{label:  '16 - Alger'},
{label: '17 - Djelfa' },
{label: '18 - Jijel' },
{label:  '19 - Setif'},
{label:  '20 - Saida'},
{label: '21 - Skikda' },
{label: '22 - Sidi Bel Abbes' },
{label:  '23 - Annaba'},
{label: '24 - Guelma' },
{label:  '25 - Constantine'},
{label:  '26 - Medea'},
{label:  '27 - Mostaganem'},
{label:  '28 - Msila'},
{label:  '29 - Mascara'},
{label:  '30 - Ouargla'},
{label: '31 - Oran' },
{label: '32 - El Baydh' },
{ label: '33 - Illizi'},
{ label: '34 - Bordj Bou Arreridj'},
{ label: '35 - Boumerdes'},
{ label: '36 - El Taref'},
{label: '37 - Tindouf' },
{ label: '38 - Tissemsilt'},
{ label: '39 - El Oued'},
{label: '40 - Khenchla' },
{label: '41 - Souk Ahrass'},
{label: '42 - Tipaza'},
{label: '43 - Mila'},
{label: '44 - Aïn Defla'},
{label: '45 - Nâama'},
{label: '46 - Aïn Temouchent'},
{label: '47 - Ghardaïa' },
{label: '48 - Relizane'},

]

function Wishlist() {
  return (
    <div classname="Wishlist">
      <div className='Wishlist'> <h1> Your Wishes !</h1> 
        </div> 
        
          <div className='Wishlist'>
                <TextField id="outlined-basic" label="email" variant="outlined" />
          </div>
          <div className='Wishlist'>
               <TextField id="outlined-basic" label="Name-of-Medicine" variant="outlined" />
          </div>
          <div className='Wishlist'>
                <Autocomplete disablePortal id="combo-box-demo" options={Wilaya}sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Wilaya" />}/>
          </div>
          <div className='Wishlist'>
            <Button variant="contained" endIcon={<SendIcon />}>
               Send
            </Button ></div>
   
    </div>
  )
}

export default Wishlist