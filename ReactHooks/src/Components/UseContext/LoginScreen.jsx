import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContext } from './UseContext';

const LoginScreen = () => {

    const navigate = useNavigate();

    const { setName, setEmail } = useContext(UseContext);

    const registerUser = () =>{
        navigate("/homepage");
    };

  return (
    <div>
        <center>
            <h1>USECONTEXT HOOK</h1>
            <h1>Register Now..............!</h1>
            <br />
            <br />
            <br />
            <br />
            <br />

            <input
            onChange={(e) => {
                setName(e.target.value);
            }}
            type="name" placeholder='Enter your name'  />
            <br />
            <br />
            <input 
            onChange={(e) =>{
                setEmail(e.target.value);
            }}
            type="email" placeholder='Enter your email' />

            <br />
            <br />
            <button
             onClick={registerUser}
            >Submit</button>
        </center>
    </div>
  )
}

export default LoginScreen