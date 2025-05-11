import './App.css';

function About(){
    return(
    <div className="About">
        <div className="App-About">
            <div>
            <img src="/icons/Pat.jpg" alt="Picture of me" className="About-img"/>
            </div>
            <div>
            <p>Hello there!<br/>
            My name is Patcharalak Tulyakul.<br/>
            I'm a Computer Science student.<br/>
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