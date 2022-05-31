import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile';
import Technologies from './components/technologies'
import Skills from './components/skills'
import Projects from './components/projects'
import Navbar from "./components/navbar";
import Social from "./components/social";
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
        <Routes>          
          <Route path='/' element={<Profile/>} />
          <Route path='/technologies' element={<Technologies/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
    <Social/>
    </div>
  </BrowserRouter>
  );
}

export default App;
