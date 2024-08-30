import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Pages/Home';
import Staff from './Components/Pages/Staff';
import { useAuth0 } from '@auth0/auth0-react';
import CardList from './Components/card/CardList';
import Search from './Components/card/Search';
import { useEffect, useState } from 'react';

function App() {
  const { isAuthenticated } = useAuth0();
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then((users) => {
        setTimeout(() => {
          setRobots(users.products);
        }, 1000);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/home' exact={true} element={<Home />} />
          <Route path='/staff'  element={<Staff />}/>
          
          {isAuthenticated && (
            <Route
              path="/card"
              element={
                <>
                  <Search searchChange={onSearchChange} />
                  <CardList robot={filteredRobots} />
                </>
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
