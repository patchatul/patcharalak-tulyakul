import { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu(){
        setMenuOpen(!menuOpen);
    }
    return(
        <header className="App-header">
            <h1>Patcharalak Tulyakul</h1>
            <nav className="nav">
                <img src="/icons/Icon1.svg" alt="menu" className="App-logo" onClick={toggleMenu}/>
                <ul className={"nav-links ${menuOpen ? 'open': ''}"}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certificates">Certificates</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;