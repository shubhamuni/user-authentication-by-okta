import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Staff from './Components/Pages/Staff';
import SigninWidget from './Components/Auth/SignInWidget';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { logout, user, isLoading } = useAuth0();
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' exact={true} Component={Home}/>
          <Route path='/home' exact={true} Component={SigninWidget}/>
          <Route path='/staff' Component={Staff} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
