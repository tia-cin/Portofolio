import * as React from 'react';
import './styles/technologies.css'

const technologies = [
    {
        href: 'https://www.w3.org/html/',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
        alt: 'html5',
        wandh: '70'
    },
    {
        href: 'https://www.w3schools.com/css/',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
        alt: 'css3',
        wandh: '70'
    },
    {
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
        alt: 'javascript',
        wandh: '55'
    },
    {
        href: 'https://reactjs.org/',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        alt: 'react',
        wandh: '70'
    },
    {
        href: 'https://redux.js.org/',
        src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1',
        alt: 'redux',
        wandh: '70'
    },
    {
        href: 'https://expressjs.com',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
        alt: 'expressjs',
        wandh: '70'
    },
    {
        href: 'https://git-scm.com/',
        src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
        alt: 'git',
        wandh: '70'
    },
    {
        href: 'https://nodejs.org',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
        alt: 'nodejs',
        wandh: '70'
    },
    {
        href: 'https://www.postgresql.org',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
        alt: 'postgresql',
        wandh: '70'
    },
    {
        href: 'https://jestjs.io',
        src: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
        alt: 'jest',
        wandh: '60'
    },
    {
        href: 'https://mochajs.org',
        src: 'https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg',
        alt: 'mocha',
        wandh: '70'
    },
    {
        href: 'https://www.typescriptlang.org/',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
        alt: 'typescript',
        wandh: '55'
    }
]

const Technologies = () => {
    return (
        <div className='gridContainer'>
            {
                technologies.length && technologies.map((t,i) => {
                    return (
                        <div key={i}>
                            <a href={t.href} target='_blank' rel='noreferrer'>
                                <img src={t.src} width={t.wandh} height={t.wandh} alt={t.alt}/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Technologies