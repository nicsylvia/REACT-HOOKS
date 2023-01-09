import React from 'react'
import useToggle from './useToggle'

const CustomHooks = () => {

    const [text, setText] = useToggle();

  return (
   <center>
        <div>
        <button 
        onClick={setText}> {text ? "Toggled" : "click to toggle"} </button>
      </div>
   </center>
  )
}

export default CustomHooks