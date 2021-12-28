import React from "react";
import Form from "../components/Form";
import Graph from "../components/Graph";
import ConnectionContextProvider from "../context/ConnectionContextProvider";

const Home = () => {
  return (
    <ConnectionContextProvider>
      <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-200">
        <Graph />
        <Form />
      </div>
    </ConnectionContextProvider>
  );
};

export default Home;
