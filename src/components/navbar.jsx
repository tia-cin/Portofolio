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
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffce6d" fillOpacity="1" d="M0,288L26.7,277.3C53.3,267,107,245,160,240C213.3,235,267,245,320,250.7C373.3,256,427,256,480,229.3C533.3,203,587,149,640,133.3C693.3,117,747,139,800,160C853.3,181,907,203,960,229.3C1013.3,256,1067,288,1120,282.7C1173.3,277,1227,235,1280,202.7C1333.3,171,1387,149,1413,138.7L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            </div>
            <div className='list-container'>
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