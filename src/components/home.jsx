import Navbar from "./navbar"
import Profile from "./profile"

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Skills from "./skills";
import Projects from "./projects";
import Social from "./social";
import Technologies from "./technologies";

const Home = () => {
    return (
        <div>
            {/* // nav  */}
            <Navbar/> 
            {/* // profile */}
            <Profile/>
            {/* // technologies */}
            <Technologies/>
            {/* // skills */}
            <Skills/>
            {/* // projects */}
            <Projects/>
            {/* // social */}
            <Social/>
            <ExpandMoreRoundedIcon/>
        </div>
    )
}

export default Home