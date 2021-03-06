import * as React from 'react';
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import './styles/navbar.css'

const Navbar = () => {

    return (
        <nav className='navbar-container'>
            <div className='nav-list-container'>
                <ul className='list-item-container'>
                    <li className='link-item'>
                        <Link to='/'>
                            <button className='link-btn'>
                                <HomeRoundedIcon sx={{ fontSize:50}}/>
                            </button>
                        </Link>
                    </li>
                    <li className='link-item'>
                        <Link to='/technologies'>
                            <button className='link-btn'>
                                <HubRoundedIcon sx={{ fontSize:50}}/>
                            </button>
                        </Link>
                    </li>
                    <li className='link-item'>
                        <Link to='/skills'>
                            <button className='link-btn'>
                                <WorkspacePremiumRoundedIcon sx={{ fontSize:50}}/>
                            </button>
                        </Link>
                    </li>
                    <li className='link-item'>
                        <Link to='/projects'>
                            <button className='link-btn'>
                                <WorkRoundedIcon sx={{ fontSize:50}}/>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar