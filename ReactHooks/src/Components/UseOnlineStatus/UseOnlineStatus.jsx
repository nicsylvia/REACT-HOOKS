
import React from "react";
import { useOnlineStatus } from "../../utilities/useOnlineStatus";

const Home = () => {
  const isOnline = useOnlineStatus();

  return <div>I am {isOnline ? "online" : "offline"}!</div>;
};

export default Home;