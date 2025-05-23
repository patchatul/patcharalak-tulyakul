import './App.css';

function Certificates() {
  return (
    <div className="Certificates">
      <h2>Certificates</h2>
        <div>
          <h3>Meta Front-End Developer</h3>
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/34FVJVRS4DKP">
            <img src="/icons/MetaFrontEndDeveloperCoursera.jpg" alt="Meta Fronf-End Developer Coursera Certificate"/>
          </a>
          <p className="Certificates-text">Skills & Knowledge:<br/>HTML, CSS, JavaScript, React, Bootstrap, Web Development, UI/UX design, Version Control</p>
        </div>
        <div>
          <h3>Responsive Web Design-freeCodeCamp</h3>
          <a href="https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/responsive-web-design">
            <img src="/icons/ResponsiveWebfreeCodeCamp.png" alt="Responsive Web Design freeCodeCamp Certificate"/>
          </a>
          <p className="Certificates-text">Skills & Knowledge:<br/>Responsive Web Design, HTML, CSS</p>
        </div>
        <div>
          <h3>Legacy JavaScript Algorithms and Data Structures-freeCodeCamp</h3>
          <a href="https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/responsive-web-design">
            <img src="/icons/JavaScriptfreeCodeCamp.png" alt="Legacy JavaScript Algorithms and Data Structures freeCodeCamp Certificate"/>
          </a>
          <p className="Certificates-text">Skills & Knowledge:<br/>Algorithms, Data Structures, JavaScript, Object Oriented Programming, Functional Programming</p>
        </div>
    </div>
  );
}

export default Certificates;