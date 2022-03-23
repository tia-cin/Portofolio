import * as React from 'react';
import { styledContainer } from './skills';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

let imgContainer = {
    marginTop: '2rem'
}

let imgContainer2 = {
    marginTop: '1rem'
}

const Projects = () => {
    return(
        <div style={styledContainer} id='projects'>
            <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
                <div style={imgContainer2}>
                    <img
                        src='https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Cloudy-256.png'
                        alt="cloud icon"
                        width='100'
                        heigth='100'
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Weather App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Application where you can see real time weather information about any city in the world
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
                <div style={imgContainer}>
                    <svg width="80" height="80" viewBox="0 0 140 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="140" height="140" rx="10" fill="#192A45"/>
                        <path d="M41.3105 25.4H61.4065L70.3665 89.528H70.6225L79.5825 25.4H99.6785V115H86.3665V47.16H86.1105L75.8705 115H64.0945L53.8545 47.16H53.5985V115H41.3105V25.4Z" fill="#357DED"/>
                    </svg>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Mangaka
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Application where you can see real time weather information about any city in the world
                    </Typography>
                </CardContent>
            </Card>
        </div>       
    )
}

export default Projects