import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './styles/projects.css'
import img from './images/mangaca-icon.png'

const projects = [
    {
        link: 'https://weather-app-tia-cin.vercel.app/',
        card: {
            sx: { width: '20em', borderRadius: 10 },
            div: {
                class: 'img1',
                img: {
                    src: 'https://cdn3.iconfinder.com/data/icons/climate-iconset/40/Cloudy-256.png',
                    alt: 'cloud-icon',
                    widthandheigh: '100'
                }
            },
            cardComponent: {
                title: 'Weather App',
                description: 'Real time weather information about any city in the world'
            }
        }
    },
    {
        link: 'https://deploy-client-kappa.vercel.app/',
        card: {
            sx: { width: '20em', borderRadius: 10 },
            div: {
                class: 'img2',
                img: {
                    src: img,
                    alt: 'mangaka-icon',
                    widthandheigh: '80'
                }
            },
            cardComponent: {
                title: 'Mangaka',
                description: 'E-Commerse app for manga/comics with reader'
            }
        }
    },
    {
        link: 'https://music-app-self.vercel.app',
        card: {
            sx: { width: '20em', borderRadius: 10 },
            div: {
                class: 'img3',
                img: {
                    src: 'https://cdn-icons-png.flaticon.com/512/2972/2972319.png',
                    alt: 'music-app-icon',
                    widthandheigh: '100'
                }
            },
            cardComponent: {
                title: 'Music App',
                description: 'Song player app made with Vue JS'
            }
        }
    }
]

const Projects = () => {
    return(
        <div className='projectsContainer'>
            {
                projects.length && projects.map((p, i) => {
                    return (
                        <a href={p.link} key={i}>
                            <Card sx={p.card.sx}>
                                <div className={p.card.div.class}>
                                    <img 
                                        src={p.card.div.img.src}
                                        alt={p.card.div.img.alt}
                                        width={p.card.div.img.widthandheigh}
                                        height={p.card.div.img.widthandheigh}
                                    />
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.card.cardComponent.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.card.cardComponent.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </a>
                    )
                })
            }
        </div>       
    )
}

export default Projects
