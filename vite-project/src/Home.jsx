import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <>
    <div>
      <h3>My Home page</h3>
    </div>
    <Outlet />
    </>
  )
}

export default Home
