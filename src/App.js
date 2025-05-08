import './App.css';
import Nav from './Nav.js'
import AboutMe from './AboutMe.js';
import Certificates from './Certificates';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AboutMe/>
      <Certificates/>
      <Projects/>
    </div>
  );
}

export default App;
