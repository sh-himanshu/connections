import { useEffect, useState } from "react";
import { useConnectContext } from "../context/ConnectionContextProvider";
import DataGraph from "graphology";
import { allSimplePaths } from "graphology-simple-path";

const Display = () => {
  const value = useConnectContext();

  const [display, setDisplay] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    if (value?.selected && value.selected.length == 2 && value.data) {
      setDisplay(
        allSimplePaths(
          new DataGraph().import(value.data),
          value.selected[0],
          value.selected[1]
        )
      );
    }
  }, [value?.selected]);
  return (
    <div className="flex flex-col bg-green-600 space-y-5 rounded-md p-4 m-4">
      <h1 className="text-xl text-center">
        {value?.selected.length === 0 ? (
          "🧑🏻‍🤝‍🧑🏻 Choose People to make Connections !"
        ) : (
          <>
            🤝 Connection between{" "}
            <span className="font-bold uppercase">{value?.selected[0]}</span>{" "}
            and{" "}
            <span className="font-bold uppercase">{value?.selected[1]}</span>
          </>
        )}
      </h1>
      <ol className="space-y-5 bg-green-200 p-2 rounded-lg shadow-md">
        {display.map((el, key) => (
          <li className="uppercase font-semibold " key={key}>
            {el.join("  >  ")}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Display;
