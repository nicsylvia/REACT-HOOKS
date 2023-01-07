import React, { useContext } from 'react'
import { UseContext } from './UseContext/UseContext'

const HomeScreen = () => {

    const {name} = useContext(UseContext);
  return (
    <div>
       <center>
       Welcome {name.toUpperCase()}

       <p>
        lorem
       </p>
       </center>
    </div>
  )
}

export default HomeScreen