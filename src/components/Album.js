import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import "../components/album.css"

function Album() {
  return (
    <div>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              MedRain
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            we investigated this set of tools and want to share it with you.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Seller</Button>
              <Button variant="outlined">Buyer
              
              </Button>
            </Stack>
          </Container>
        </Box>
        <div className='album'>
           <div className='album1'>
         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent  >
          Anti Inflamatoire
          
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
        Show more !
        </Button>
      </CardActions>
    </Card>
     

     
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
     <CardContent>
       AntiBiotique
     </CardContent>
   
   <CardActions>
     <Button size="small" color="primary">
     Show more !
     </Button>
   </CardActions>
 </Card>
   </div>
   <div className='album2'>
         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          AntiHistaminique
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
        Show more !
        </Button>
      </CardActions>
    </Card>
     
         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          AntiParasitaire
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
        Show more !
        </Button>
      </CardActions>
    </Card>
      </div>
      <div className='album3'>
         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          Anesthesiques
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
        Show more !
        </Button>
      </CardActions>
    </Card>
      
         <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          Corticoide
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary">
          Show more !
        </Button>
      </CardActions>
    </Card>
      </div>
      </div>
      </div>
  )
}

export default Album