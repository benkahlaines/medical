import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { type } from '@testing-library/user-event/dist/type';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name_med', headerName: 'Name_med', width: 200 },
  { field: 'Name_pharmacy ', headerName: 'Name_pharmacy', width: 200 },
  {
    field: 'Date_of_expiration',
    headerName: 'Date_of_expiration',
    type: 'Date',
    width: 150,
  },
  { field: 'availablety', headerName: 'availablety', width: 200  ,type: 'Boolean' ,},
  { field: 'Phonenumber', headerName: 'Phonenumber', width: 200   ,},
  { field: 'Location', headerName: 'Location', width: 200   ,},
 
];

const rows = [
  { id: 1, Name_med : 'Snow', Name_pharmacy: 'Jon' ,Date_of_expiration: 35 ,availablety:'available',Phonenumber:+21352354123,Location:'oran'},

];

export default function DataTable() {
  return (
    <div className='data'>
      <div className='data1'>
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
                if your medicine is not available , you can always apply for an order !
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Add</Button>
              
            </Stack>
          </Container>
        </Box>

      </div>
    <div  style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
