import React from 'react'
import styled from 'styled-components';
import useToggle from './useToggle'

const CustomHooks = () => {

    const [text, setText] = useToggle();

  return (
   <center>
        <div>
          <Button 
          onClick={setText}> {text ? "Open Modal" : "Close Modal"} </Button>
      </div>
   </center>
  )
}

export default CustomHooks;

const Button = styled.div`
  padding: 20px;
  background-color: skyblue;
  color: white;
`;