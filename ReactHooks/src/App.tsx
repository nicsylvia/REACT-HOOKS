import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeScreen from './Components/HomeScreen'
import LoginScreen from './Components/LoginScreen'
import CustomHooks from './Components/UseDebugValue/CustomHooks'
import TaskApp from './Components/UseReducer/UseCaseOfUseReducer'


const App = () => {

  let element = useRoutes([
    {
      path: "/",
      // element: <LoginScreen />
      // element: <CustomHooks />
      element: <TaskApp />
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