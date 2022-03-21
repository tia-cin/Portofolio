import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Social from './components/social'
import Skills from './components/skills'
import Projects from './components/projects'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/contact' element={<Social/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
