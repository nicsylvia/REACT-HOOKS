import React,{useRef} from 'react'
import Child from './Child'

export const Parent = () => {
 const myRef = useRef()

  return (
    <div>
    <Child ref={myRef}/>
    <button  onClick={()=>{
      myRef.current.increment()
    }}>Parent button</button>
    
    </div>
  )
}
