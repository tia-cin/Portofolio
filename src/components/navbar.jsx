import * as React from 'react';
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import './styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <Link to='/'>
                <HomeRoundedIcon/>
            </Link>
            <Link to='/technologies'>
                <HubRoundedIcon/>
            </Link>
            <Link to='/skills'>
                <WorkspacePremiumRoundedIcon/>
            </Link>
            <Link to='/projects'>
                <WorkRoundedIcon/>
            </Link>
        </div>
    )
}

export default Navbar