import './App.css';
import StockPrediction from '../src/icons/stockprediction.png';
import LittleLemon from '../src/icons/LittleLemon.png';

function Projects(){
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div>
                <h3><a href='https://github.com/patchatul/stock_prediction'>LSTM Stock Prediction</a></h3>
                <img src={StockPrediction} 
                alt='LSTM Stock Prediction Visualization'/>
                <p className="Projects-text">Build an LSTM-based Neural Network model to predict and visualize stock price and error in prediction using yfinance, NumPy, Pandas, Scikit-learn, and Matplotlib</p>
            </div>
            <div>
                <h3><a href="https://github.com/patchatul/Little-Lemon-Project-Capstone">Little Lemon Website</a></h3>
                <img src={LittleLemon}
                alt='Little Lemon Website Landing Page'/>
                <p className="Projects-text">Responsive website from Meta Front-End Developer certificate capstone project using HTML, CSS, Bootstrap, Javascript, React</p>
            </div>
        </div>
      );    
}
export default Projects;