import * as React from 'react';
import { styledImg } from './technologies';
import materialUi from './images/material-ui-logo (1).png'
import bootstrap from './images/bootstrap.png'
import photoshop from './images/photoshop.png'
import illustrator from './images/illustrator.png'
import premiere from './images/premiere.png'

let styledContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}

const Skills = () => {
    return (
            <div style={styledContainer} id='skills'>
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
    )
}

export default Skills
export {styledContainer}