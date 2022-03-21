import * as React from 'react';

let styledContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr', 
    gap: '5em 10px',
    gridTemplateAreas:`
    ". . ."
    ". . ."
    ". . ."`,
    alignItems: 'center',
    justifyItems: 'center'
}

let styledImg = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '5em',
    height:'5em',
    border: '5px solid',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: '50%'
}

const Technologies = () => {
    return (
        <div style={styledContainer}>
            <div style={styledImg}>
                <a  href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                    <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70"/> 
                </a>
            </div>
            <div style={styledImg}>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70"/> 
                </a>
            </div>
            <div style={styledImg}>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="55" height="55"/> 
                </a>
            </div>
            <div style={styledImg}>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70"/> 
                </a>
            </div>
            <div style={styledImg}>
                <a href='https://redux.js.org/' target="_blank" rel="noreferrer">
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1' alt="redux" width="70" height="70"/>
                </a>
            </div>
            <div style={styledImg}>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="70" height="70"/> 
                </a> 
            </div>
            <div style={styledImg}>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70"/> 
                </a> 
            </div>
            <div style={styledImg}>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="70" height="70"/>
                </a>  
            </div>
            <div style={styledImg}>
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="70" height="70"/> 
                </a>
            </div>
            <div style={styledImg}>
                <a href="https://jestjs.io" target="_blank" rel="noreferrer"> 
                    <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="60" height="60"/> 
                </a>  
            </div>
            <div style={styledImg}>
                <a href="https://mochajs.org" target="_blank" rel="noreferrer"> 
                    <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="70" height="70"/> 
                </a> 
            </div>
            <div style={styledImg}>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="55" height="55"/> 
                </a>
            </div>
            
        </div>
    )
}

export default Technologies