import './App.css';
import Nav from './Nav.js'
import About from './About.js';
import Certificates from './Certificates';
import Projects from './Projects';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/certificates" element={<Certificates/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
