import React from "react";
import { useConnectContext } from "../context/ConnectionContextProvider";

interface ShapeProps {
  text: string;
}

const Shape = ({ text }: ShapeProps) => {
  const value = useConnectContext();
  return (
    <div
      data-name={text}
      onClick={(e) => {
        console.log((e.target as HTMLDivElement).getBoundingClientRect());
        if (value) console.log(value.pos[text]);
      }}
      className="z-10 group bg-blue-300 rounded-2xl flex justify-center items-center max-w-min content py-2 px-4 hover:shadow-md hover:bg-blue-700 border border-gray-500 hover:border-transparent text-center"
    >
      <p className="uppercase text-lg group-hover:text-gray-100 tracking-wide">
        {text}
      </p>
    </div>
  );
};

export default Shape;
