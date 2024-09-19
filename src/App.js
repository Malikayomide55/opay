import './App.css';
import HomeScreen from './screen/HomeScreen.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transaction from './screen/transaction.js';
import Rewards from './screen/Rewards.js';
import Finance from './screen/Finance.js';
import Card from './screen/card.js';
import Me from './screen/Me.js';
import AddMoney from './screen/AddMoney.js';
import Transfer from './screen/Transfer.js';
import Withdraw from './screen/withdraw.js';
import ToOpay from './screen/ToOpay.js';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/Transaction" element={<Transaction/>} />
                <Route path="/back" element={<HomeScreen/>} />
                <Route path="/Home" element={<HomeScreen/>} />
                <Route path="/Reward" element={<Rewards/>} />
                <Route path="/Finance" element={<Finance/>} />
                <Route path="/Card" element={<Card/>} />
                <Route path="/Me" element={<Me/>} />
                <Route path="/AddMoney" element={<AddMoney/>} />
                <Route path="/Transfer" element={<Transfer/>} />
                <Route path="/Withdraw" element={<Withdraw/>} />
                <Route path="/ToOpay" element={<ToOpay/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;