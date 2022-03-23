import * as React from 'react';
import { styledContainer } from './skills';
const Social = () => {
    return (
        <div id='contact' style={styledContainer}>
            <a href='https://linkedin.com/in/cintia-arce-profile'>
                <img src='https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png' alt='linkedin' width='50' height='50'/>
            </a>
            <a href='https://github.com/tia-cin'>
                <img src='https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-square-256.png' alt='github' width='50' height='50'/>
            </a>
            <a href='mailto:cintiaayelenarce@gmail.com'>
                <img src='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-256.png' alt='mail' width='50' height='50'/>
            </a>
            <a href='C:/Users/cinti/OneDrive/Documents/Programming/Cintia Arce CV.pdf' download>
                <img src='https://cdn3.iconfinder.com/data/icons/resume-solid-essential/512/Experience_briefcase-256.png' alt='resume' width='50' heigth='50' />
            </a>
        </div>
    )
}

export default Social