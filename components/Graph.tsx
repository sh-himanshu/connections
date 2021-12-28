import React, { useCallback } from "react";
import Shape from "./Shape";

import { useConnectContext } from "../context/ConnectionContextProvider";
import { getCenter } from "../lib/utils";
import Line from "./Line";

const Graph = () => {
  const value = useConnectContext();

  const ref = useCallback(
    (node) => {
      if (node !== null) {
        value?.setPos(
          Array.from((node as HTMLDivElement).querySelectorAll("div")).reduce(
            (final, current) => ({
              ...final,
              [current.dataset["name"] as string]: getCenter(
                current.getBoundingClientRect()
              ),
            }),
            {}
          )
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value?.data]
  );

  return (
    <div className="md:flex-auto p-3">
      <div
        ref={ref}
        className="rounded-2xl shadow-xl grid grid-cols-2 sm:grid-cols-3 bg-pink-500 gap-y-5 justify-items-center items-center p-5"
      >
        {value?.data.map(({ name }, index) => (
          <Shape key={index} text={name} />
        ))}
      </div>

      {value &&
        value.pos &&
        value.data.map((person, indexA) =>
          person.friends.map((from, indexB) => (
            <Line
              from={value.pos[from]}
              to={value.pos[person.name]}
              key={indexA + indexB}
            />
          ))
        )}
    </div>
  );
};

export default Graph;
