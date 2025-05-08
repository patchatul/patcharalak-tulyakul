import './App.css';

function Certificates() {
  return (
    <div className="Certificates">
      <h1>Certificates</h1>
        <div>
          <p>Meta Front-End Developer</p>
          <a href="https://www.coursera.org/account/accomplishments/professional-cert/34FVJVRS4DKP">
            <img src="/icons/MetaFrontEndDeveloperCoursera.jpg" alt="Meta Fronf-End Developer Coursera Certificate"/>
          </a>
          <p>Projects and skills: HTML, CSS, JavaScript, React, Bootstrap CSS Framework, Web Development, UI/UX design, User Experience, Algorithms, Version Control</p>
        </div>
        <div>
          <p>Responsive Web Design-freeCodeCamp</p>
          <a href="https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/javascript-algorithms-and-data-structures">
            <img src="/icons/ResponsiveWebfreeCodeCamp.png" alt="Responsive Web Design freeCodeCamp Certificate"/>
          </a>
          <p>Projects and skills: </p>
        </div>
        <div>
          <p>Legacy JavaScript Algorithms and Data Structures-freeCodeCamp</p>
          <a href="https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/responsive-web-design">
            <img src="/icons/JavaScriptfreeCodeCamp.png" alt="Legacy JavaScript Algorithms and Data Structures freeCodeCamp Certificate"/>
          </a>
          <p>Projects and skills: </p>
        </div>
    </div>
  );
}

export default Certificates;