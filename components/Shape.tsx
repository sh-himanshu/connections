import React from "react";
import { useConnectContext } from "../context/ConnectionContextProvider";
import { removeItem } from "../lib/utils";

interface ShapeProps {
  text: string;
}

const Shape = ({ text }: ShapeProps) => {
  const value = useConnectContext();
  return (
    <div
      data-name={text}
      onClick={() => {
        value?.setSelected((arr) => {
          let arrCopy = [...arr];
          if (arrCopy.includes(text)) {
            arrCopy = removeItem(arrCopy, text);
          } else {
            arrCopy.push(text);
          }
          return arrCopy.slice(-2);
        });
        console.log(value?.selected);
      }}
      className={`z-10 group  rounded-2xl text-center flex justify-center items-center max-w-min content py-2 px-4 hover:shadow-md ${
        value?.selected.includes(text)
          ? "bg-blue-700 border-transparent"
          : "bg-blue-300 hover:bg-blue-700 border border-gray-500 hover:border-transparent"
      }`}
    >
      <p
        className={`uppercase text-lg  tracking-wide ${
          value?.selected.includes(text)
            ? "text-gray-100"
            : "group-hover:text-gray-100"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Shape;
