import React from 'react'
import "./Header.css"
import { Button,TextField } from '@mui/material';
import {AddLocation, LocalPharmacy, Sick , LockOpen} from '@mui/icons-material';
import logo from "./LogoMR.png"
import Data from './Data';
import AddIcon from '@mui/icons-material/Add';
import HelpIcon from '@mui/icons-material/Help';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import MedicationIcon from '@mui/icons-material/Medication';
function Header() {
    return (
        <div className="header" >
            <div className="header_logo">
                <img className='lg' src={logo} alt="" />
            </div>
            <div className="header_buttons">
                <Button LinkComponent={Data} variant="text" size="large" startIcon={<MedicationIcon/>}>
                  Medicine
                </Button>
                <Button variant="text" size="large" startIcon={<AddIcon/>}>
                Wishlist
                </Button>
                <Button variant="text" size="large" startIcon={< AssignmentLateIcon />}>
                   Request
                </Button>
                <Button variant="text" size="large" startIcon={< CoPresentIcon />}>
                    Login
                </Button>
                <Button variant="text" size="large" startIcon={< HelpIcon/>}>
                    Help
                </Button>
                
              

            </div>
        </div>
    )


}

export default Header
