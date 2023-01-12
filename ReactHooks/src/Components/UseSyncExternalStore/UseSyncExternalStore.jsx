import React from "react";
import { useSyncExternalStore } from "react";
import styled from "styled-components";

const App = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <Container>
      <Wrapper bg={isOnline ? "1" : ""}></Wrapper>
      <h2>{isOnline ? "you are online" : "you are offline"}</h2>
    </Container>
  );
};

const getSnapshot = () => {
  return navigator.onLine;
};

const subscribe = (callback) => {
  window.addEventListener("online", callback);                                 
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

export default App;

const Wrapper = styled.div`
  width: 270px;
  height: 270px;
  border: 10px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg ? "green" : "red")};
  box-shadow: 1px 2px 10px 1px rgba(129, 129, 129, 0.9);
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;