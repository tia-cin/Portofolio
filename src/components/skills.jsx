import * as React from 'react';
import { styledImg } from './technologies';
import Typography from '@mui/material/Typography';
import materialUi from './images/material-ui-logo (1).png'
import bootstrap from './images/bootstrap.png'
import photoshop from './images/photoshop.png'
import illustrator from './images/illustrator.png'
import premiere from './images/premiere.png'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

let column = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '7rem 0'
}

let divider = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
}

let skillContainer = {
    borderRadius: 10,
    backgroundColor: 'white',
    width: 380,
    padding: '1rem 1rem'
}

let styledContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
}

let softskillContainer = {
    borderRadius: 10,
    backgroundColor: 'white',
    width: 420,
    margin: '3rem 1rem',
    padding: '2rem 1rem' 
}

let softskill = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

let soft = {
    display: 'flex',
    flexDirection: 'column'
}

const Skills = () => {
    return (
            <div style={column} id='skills'>
                <div style={divider}>
                    <div style={skillContainer}>
                        <Typography variant="h5">Design Frameworks</Typography>
                        <div style={styledContainer}>
                            <div style={styledImg}>
                                <a href='https://mui.com/' target="_blank" rel="noreferrer">
                                    <img src={materialUi} alt='material ui' width="70" height="70"/>
                                </a>
                            </div>
                            <div style={styledImg}>
                                <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">
                                    <img src={bootstrap} alt='bootstrap' width="90" height="90"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={skillContainer}>
                        <Typography variant="h5">Adobe Programs</Typography>
                        <div style={styledContainer}>
                            <div style={styledImg}>
                                <a href='https://www.adobe.com/products/photoshop.html' target="_blank" rel="noreferrer">
                                    <img src={photoshop} alt='photoshop' width="70" height="70"/>
                                </a>
                            </div>
                            <div style={styledImg}>
                                <a href='https://www.adobe.com/products/illustrator/free-trial-download.html' target="_blank" rel="noreferrer">
                                    <img src={illustrator} alt='illustrator' width="80" height="80"/>
                                </a>
                            </div>
                            <div style={styledImg}>
                                <a href='https://www.adobe.com/products/premiere.html' target="_blank" rel="noreferrer">
                                    <img src={premiere} alt='premiere' width="70" height="70"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div style={softskillContainer}>
                        <Typography variant="h5">Soft Skills</Typography>
                        <div style={softskill}>
                            <div style={soft}>
                                <div style={styledImg}>
                                    <GroupsRoundedIcon fontSize='large'/>
                                </div>
                                <p>
                                    Team <br/>
                                    Player
                                </p>
                            </div>
                            <div>
                                <div style={styledImg}>
                                    <LightbulbRoundedIcon fontSize='large'/>
                                </div>
                                <p>Creative</p>
                            </div>
                            <div>
                                <div style={styledImg}>
                                    <SentimentSatisfiedAltRoundedIcon fontSize='large'/>
                                </div>
                                <p>
                                    Positive <br/>
                                    Attitude
                                </p>
                            </div>
                            <div>
                                <div style={styledImg}>
                                    <BoltRoundedIcon fontSize='large'/>
                                </div>
                                <p>
                                    Fast <br/>
                                    Learner
                                </p>
                            </div>
                        </div>
                    </div>
                </div>        
    )
}

export default Skills
export {styledContainer}