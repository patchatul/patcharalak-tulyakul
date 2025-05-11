import './App.css';
import Nav from './Nav.js'
import About from './About.js';
import Certificates from './Certificates';
import Projects from './Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="Main">
        <Routes>
          <Route index element={<About/>}></Route>
          <Route path="/certificates" element={<Certificates/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
