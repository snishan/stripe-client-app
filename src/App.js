import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionPlans from './components/SubscriptionPlans';
import PaymentSuccess from './components/PaymentSuccess';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SubscriptionPlans />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;