import * as React from 'react';
import Button from '@mui/material/Button';

let navbarStyle =  {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '1rem',
}

const Navbar = () => {
    return (
        <div className='navbar-container' style={navbarStyle}>
            <Button variant="text">Home</Button>
            <Button variant="text">Skills</Button>
            <Button variant="text">Projects</Button>
            <Button variant="text">Contact</Button>
        </div>
    )
}

export default Navbar