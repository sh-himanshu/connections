import React from "react";
import Display from "../components/Display";
import Form from "../components/Form";
import Graph from "../components/Graph";
import ConnectionContextProvider from "../context/ConnectionContextProvider";

const Home = () => {
  return (
    <>
      {typeof window !== "undefined" && (
        <ConnectionContextProvider>
          <div className="flex flex-col h-screen w-screen ">
            <div className="flex flex-col md:flex-row w-full bg-gray-200 items-center justify-center space-3">
              <Graph />
              <Form />
            </div>
            <Display />
          </div>
        </ConnectionContextProvider>
      )}
    </>
  );
};

export default Home;
