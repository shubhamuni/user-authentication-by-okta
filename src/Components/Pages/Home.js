import React from 'react'

  const Home = () => {
    console.log("Home component")
  return (
    <div className='container'>
      <h1>Home</h1>
      <div className="alert alert-danger" role="alert">
        You have to login first pleasae click on login button above
      </div>
    </div>
  )
}
export default Home;