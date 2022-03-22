import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
    return(
        <div>
            <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    src='https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Cloudy-256.png'
                    alt="cloud icon"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Weather App
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Application where you can see real time weather information about any city in the world
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href='https://weather-app-tia-cin.vercel.app/' target='_blank' rel="noreferrer">
                        <Button size="small">Ckeck it out</Button>
                    </a>
                </CardActions>
            </Card>
            </div>
        </div>       
    )
}

export default Projects