import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material'
import profile from './images/cintia.jpg'
import Social from './social';

let styledTitles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}

let container = {
    position: 'relative',
    maxHeigth: '100vw',
    heigth: '100vw'
}

let styledAvatar = { 
    width: '6em', 
    height: '6em',
    border: '5px solid',
    borderColor: 'white'
}

const Profile = () => {
    return(
        <div style={container}>
            <Container style={styledTitles}>
                <div>
                    <Typography variant="h1" >
                        Hi, I'm Cintia
                    </Typography>
                    <Typography variant="h3" >
                        a Full Stack Web Developer
                    </Typography>
                </div>
                <div>
                    <Avatar 
                        alt="Cintia Arce" 
                        src={profile}
                        sx={styledAvatar} 
                    />
                </div>
            </Container>
            <Social/>
        </div>
        
    )
}
export default Profile