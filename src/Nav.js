import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return(
        <header className="App-header">
            <h1 classname="App-h1"><Link to="/">Patcharalak Tulyakul</Link></h1>
            <nav className="App-nav">
                <img src={`${process.env.PUBLIC_URL}/icons/Icon1.svg`} alt="menu" className="App-logo" onClick={toggleMenu}/>
                {menuOpen && 
                <div className="App-nav-tab">
                    <ul className={'Nav-links ${menuOpen ? "open": ""}'}>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/certificates">Certificates</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </div>
                }
            </nav>
        </header>        
    );
}
export default Nav;