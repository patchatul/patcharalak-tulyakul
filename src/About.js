import './App.css';

function About(){
    return(
    <div className="About">
        <div>
            <img src="/icons/Pat.jpg" alt="Picture of me" className="About-img"/>
            <p>Hello! My name is Patcharalak Tulyakul. I'm a Computer Science student.</p>
        </div> 
        <div>
            <a href="https://github.com/patchatul">github</a>
            <a href="https://www.linkedin.com/in/patcharalak-tulyakul/">linkedin</a>
            <a href="mailto:patchatulyakul@gmail.com">gmail</a>
        </div>
    </div>
    );
}
export default About;