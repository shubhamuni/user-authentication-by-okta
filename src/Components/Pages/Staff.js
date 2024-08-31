import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export default function Staff() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className='container'>
      {isAuthenticated ? (
        <>
          <h1>Staff</h1>
          <div className="alert alert-light" role="alert">
            Welcome to our staff
          </div>
        </>
      ) :(<div className="alert alert-danger" role="alert">
            Please login to get access to staff
          </div>) }
    </div>
  )
}
