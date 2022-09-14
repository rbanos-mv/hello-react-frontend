import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GreetingPage from './pages/GreetingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
