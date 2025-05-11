import Nav from './Nav.js'
import About from './About.js';
import Certificates from './Certificates.js';
import Projects from './Projects.js';

function Home(){
    return(
        <main className="App-main">
            <About/>
            <Certificates/>
            <Projects/>
        </main>
    );
}
export default Home;