import * as React from 'react';
import materialUi from './images/material-ui-logo (1).png'
import bootstrap from './images/bootstrap.png'
import photoshop from './images/photoshop.png'
import illustrator from './images/illustrator.png'
import premiere from './images/premiere.png'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import './styles/skills.css'

const Skills = () => {
    return (
        <div>
            <div className='skillsContainer'>
                <div className='design'>
                    <div className='designContainer'>
                        <h5 className='sub-title'>Design Frameworks</h5>
                        <div>
                            <div>
                                <a href='https://mui.com/' target="_blank" rel="noreferrer">
                                    <img src={materialUi} alt='material ui' width="70" height="70"/>
                                </a>
                            </div>
                            <div>
                                <a href='https://getbootstrap.com/' target="_blank" rel="noreferrer">
                                    <img src={bootstrap} alt='bootstrap' width="90" height="90"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='designContainer'>
                        <h5 className='sub-title'>Adobe Programs</h5>
                        <div>
                            <div>
                                <a href='https://www.adobe.com/products/photoshop.html' target="_blank" rel="noreferrer">
                                    <img src={photoshop} alt='photoshop' width="70" height="70"/>
                                </a>
                            </div>
                            <div>
                                <a href='https://www.adobe.com/products/illustrator/free-trial-download.html' target="_blank" rel="noreferrer">
                                    <img src={illustrator} alt='illustrator' width="80" height="80"/>
                                </a>
                            </div>
                            <div>
                                <a href='https://www.adobe.com/products/premiere.html' target="_blank" rel="noreferrer">
                                    <img src={premiere} alt='premiere' width="70" height="70"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='softContainer'>
                        <h5 className='sub-title'>Soft Skills</h5>
                        <div className='icons-container'>
                            <div>
                                <div>
                                    <GroupsRoundedIcon fontSize='large'/>
                                </div>
                                <p className='skill-description'>
                                    Team <br/>
                                    Player
                                </p>
                            </div>
                            <div>
                                <div>
                                    <LightbulbRoundedIcon fontSize='large'/>
                                </div>
                                <p className='skill-description'>Creative</p>
                            </div>
                            <div>
                                <div>
                                    <SentimentSatisfiedAltRoundedIcon fontSize='large'/>
                                </div>
                                <p className='skill-description'>
                                    Positive <br/>
                                    Attitude
                                </p>
                            </div>
                            <div>
                                <div>
                                    <BoltRoundedIcon fontSize='large'/>
                                </div>
                                <p className='skill-description'>
                                    Fast <br/>
                                    Learner
                                </p>
                            </div>
                        </div>
                </div>
            </div>        
                
        </div>
    )
}

export default Skills