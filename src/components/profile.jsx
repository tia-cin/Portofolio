import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import profile from './images/cintia.jpg'
import Social from './social';
import './styles/profile.css'

let styledAvatar = { 
    width: '6em', 
    height: '6em',
    border: '5px solid',
    borderColor: 'white'
}

const Profile = () => {
    return(
        <div className='profileContainer'>
            <div className='titlesContainer'>
                <div className='titles'>
                    <Typography variant="h1" >
                        Hi, 
                        <strong className='strong-title'>
                            I'm Cintia
                        </strong>
                    </Typography>
                    <Typography variant="h3" >
                        a Full Stack Web 
                        <strong className='strong-title'>
                            Developer
                        </strong>
                    </Typography>
                </div>
                <div className='avatar-container'>
                    <Avatar 
                        alt="Cintia Arce" 
                        src={profile}
                        sx={styledAvatar} 
                        className='shadow'
                    />
                </div>
            </div>
            <Social/>
        </div>
        
    )
}
export default Profile