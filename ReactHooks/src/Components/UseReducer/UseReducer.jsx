import React, { useReducer } from 'react'
import { reducerState } from './ReducerState';

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducerState, {count: 0, show: false});

  return (
    <center>
        <div>
            <h2>USEREDUCER HOOK</h2>
            <br /> 
            <h1>{state.count}</h1>
             
            {
                state.count === 20 ? null : (
                    <button 
                onClick={() =>{
                    dispatch({
                        type: "INCREMENTCOUNT"
                    })
                }}>Add Count</button>
                )
            }

            {
                state.count === 0 ? null : (
                    <button
            onClick={() =>{
                dispatch({
                    type: "DECREMENT"
                })
            }}
            >Decrement Count</button>
                )
            }
            
            {
                state.show ? <div>Sylvia</div> : null
            }
        </div>
    </center>
  )
}

export default UseReducer