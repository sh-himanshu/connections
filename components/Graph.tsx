import React, { useCallback } from "react";
import Shape from "./Shape";

import { useConnectContext } from "../context/ConnectionContextProvider";
import { getCenter } from "../lib/utils";
import Line, { Svg } from "./Line";

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
        {value?.data?.nodes.map(({ key }, index) => (
          <Shape key={index} text={key} />
        ))}
      </div>

      {value && value.pos && value.data && (
        <Svg>
          {value.data.edges.map(({ source, target, key }) => (
            <Line from={value.pos[source]} to={value.pos[target]} key={key} />
          ))}
        </Svg>
      )}
    </div>
  );
};

export default Graph;
