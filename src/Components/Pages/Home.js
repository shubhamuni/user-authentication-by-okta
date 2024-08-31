import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

  const Home = () => {
    const { isAuthenticated, user } = useAuth0();
  return (
    <div className='container'>
      <h1>Home</h1>
      {!isAuthenticated ? <div className="alert alert-danger" role="alert">
        You have to login first pleasae click on login button above
      </div> : 
        <h3>Welcome {user.name}</h3>
      }
    </div>
  )
}
export default Home;