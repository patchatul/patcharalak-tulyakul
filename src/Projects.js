import './App.css';

function Projects(){
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div>
                <h3><a href='https://github.com/patchatul/stock_prediction'>LSTM Stock Prediction</a></h3>
                <img src='https://private-user-images.githubusercontent.com/153275431/477226419-6d030411-fbbd-4a2d-9eda-6cd73083f1c6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUxOTY3MDcsIm5iZiI6MTc1NTE5NjQwNywicGF0aCI6Ii8xNTMyNzU0MzEvNDc3MjI2NDE5LTZkMDMwNDExLWZiYmQtNGEyZC05ZWRhLTZjZDczMDgzZjFjNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxNFQxODMzMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMTFkMjY2M2ZiN2QxZWI1Njc1MGZmMjI4MjMzYzU2ODdlNGFmMDdhN2IzYzcyZjFhNzg2ZmE1MmIwOTJjNDZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GyOn0918WfSIQen2weS4XQK-Qf40ZPDtfXBZrX4BBqM'/>
                <p className="Projects-text">Build an LSTM-based Neural Network model to predict and visualize stock price and error in prediction using yfinance, NumPy, Pandas, Scikit-learn, and Matplotlib</p>
            </div>
            <div>
                <h3><a href="https://github.com/patchatul/Little-Lemon-Project-Capstone">Little Lemon Website</a></h3>
                <img src="/icons/LittleLemon.png" alt="Little Lemon Website Landing Page"/>
                <p className="Projects-text">Responsive website from Meta Front-End Developer certificate capstone project using HTML, CSS, Bootstrap, Javascript, React</p>
            </div>
        </div>
      );    
}
export default Projects;