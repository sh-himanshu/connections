import React from "react";
import Form from "../components/Form";
import Graph from "../components/Graph";
import ConnectionContextProvider from "../context/ConnectionContextProvider";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gray-200">
      {typeof window !== "undefined" && (
        <ConnectionContextProvider>
          <Graph />
          <Form />
        </ConnectionContextProvider>
      )}
    </div>
  );
};

export default Home;
