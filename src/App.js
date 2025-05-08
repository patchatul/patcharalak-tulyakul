import './App.css';
import Nav from './Nav.js'
import About from './About.js';
import Certificates from './Certificates';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="Main">
        <About/>
        <Certificates/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;
