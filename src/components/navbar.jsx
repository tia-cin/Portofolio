import * as React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';

let navbarStyle =  {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '2rem',
        textDecoration: 'none',
}

const Navbar = () => {
    return (
        <div className='navbar-container' style={navbarStyle}>
            <a href='/'>
                <HomeRoundedIcon/>
            </a>
            <a href='/technologies'>
                <HubRoundedIcon/>
            </a>
            <a href='/skills'>
                <WorkspacePremiumRoundedIcon/>
            </a>
            <a href='/projects'>
                <WorkRoundedIcon/>
            </a>
        </div>
    )
}

export default Navbar