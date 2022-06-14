import * as React from 'react';
import './styles/social.css'
import cv from './images/Cintia Arce Resume.pdf'

const social = [
    {
        link: 'https://linkedin.com/in/cintia-arce-profile',
        src: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png',
        alt: 'linkedIn',
        wh: '50'
    },
    {
        link: 'https://github.com/tia-cin',
        src: 'https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/github-square-256.png',
        alt: 'github',
        wh:'60'
    },
    {
        link: 'mailto:cintiaayelenarce@gmail.com',
        src: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_email-256.png',
        alt: 'mail',
        wh:'60'
    }
]

const Social = () => {
    return (
        <footer className='footer-container'>
            <div className='list-container'>
                <ul className='social-container'>
                    {
                        social.length && social.map((s,i) => {
                            return (
                                <a href={s.link} key={i}> 
                                    <li className='social-item'>
                                        <img src={s.src} alt={s.alt} width={s.wh} height={s.wh}/>
                                    </li>
                                </a>
                            )
                        })
                    }
                    <a href={cv} download className='social-item'>
                        <img src='https://cdn3.iconfinder.com/data/icons/resume-solid-essential/512/Experience_briefcase-256.png' alt='resume' width='60' heigth='60' />
                    </a>
                </ul>
            </div>
        </footer>
    )
}

export default Social