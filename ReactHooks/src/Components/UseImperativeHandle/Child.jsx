import React,{forwardRef, useState,useImperativeHandle} from 'react'

const Child = forwardRef((props, ref) => {


    const [count, setCount] = useState(0)
    useImperativeHandle(ref,()=>({
        increment
    }))

    const increment = () =>{
        setCount( count + 1)
    }

  return (
    <div>
    <button onClick={increment}>child</button>
    <h2>count: {count}</h2>
    </div>
  )
})

export default Child