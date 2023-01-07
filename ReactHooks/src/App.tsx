import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeScreen from './Components/HomeScreen'
import LoginScreen from './Components/LoginScreen'


const App = () => {

  let element = useRoutes([
    {
      path: "/",
      element: <LoginScreen />
    },
    {
      path: "homepage",
      element: <HomeScreen />
    }
  ])
  return (
    <div>
      {element}
    </div>
  )
}

export default App