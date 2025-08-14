import './App.css';
import pat from '../src/icons/Pat.jpg';

function About(){
    return(
    <div className="About">
        <div className="App-About">
            <div>
            <img src={pat} alt="Picture of me" className="About-img"/>
            </div>
            <div>
            <p>Hi there!<br/>
            Name:<br/>Patcharalak Tulyakul / Pat<br/>
            Major:<br/>Computer Science <br/>
            Education:<br/>4.00, Dean's List @ HCC (May 2024 - Dec 2025)<br/>
            Currently learning:<br/>
            Back-end, Machine Learning<br/>
            </p>
            </div>
        </div>
        <div className="App-footer">
            <a href="https://github.com/patchatul">Github</a>
            <a href="https://www.linkedin.com/in/patcharalak-tulyakul/">Linkedin</a>
            <a href="mailto:patchatulyakul@gmail.com">Gmail</a>
        </div>
    </div>
    );
}
export default About;