
import React from "react";
import { useOnlineStatus } from "react";

const Home = () => {
  const isOnline = useOnlineStatus();

  return <div>I am {isOnline ? "online" : "offline"}!</div>;
};

export default Home;