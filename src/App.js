import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Staff from './Components/Pages/Staff';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' exact={true} Component={Home}/>
          <Route path='/staff' Component={Staff} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
