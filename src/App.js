import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Technologies from './components/technologies';
import Skills from './components/skills';
import Projects from './components/projects';
import Navbar from './components/navbar';
import Home from './components/home'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Routes>          
              <Route path='/' element={<Home/>} />
              <Route path='/technologies' element={<Technologies/>} />
              <Route path='/skills' element={<Skills/>}/>
              <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
