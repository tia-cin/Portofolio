import * as React from 'react';
import './styles/profile.css'

let styledAvatar = { 
    width: '9em', 
    height: '9em',
    border: '5px solid',
    borderColor: 'white'
}

const Profile = () => {
    return(
        <div className='profileContainer'>
            <div className='titlesContainer'>
                <div className='titles'>
                    <div className='title-dev'>
                        <h1 className='title'>
                            Hi,  
                        </h1>
                        <h1 className='title special-title'>
                            I'm Cintia
                        </h1>    
                    </div>
                    <div className='title-dev'>
                        <h1 className='title'>
                            a Full Stack  
                        </h1>
                        <h1 className='title special-title'>
                            Developer
                        </h1>         
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Profile