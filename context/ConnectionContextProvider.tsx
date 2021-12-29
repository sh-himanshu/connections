import { createContext, useContext, useEffect, useState } from "react";
import { getConnections, setConnections } from "../lib/graph";
import { SerializedGraph, Attributes } from "graphology-types";

interface connectContextValue {
  data: SerializedGraph<Attributes, Attributes, Attributes> | undefined;
  setData: React.Dispatch<
    React.SetStateAction<SerializedGraph<Attributes, Attributes, Attributes>>
  >;
  pos: any;
  setPos: React.Dispatch<any>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ConnectionContextProviderProps {
  children: React.ReactNode;
}

const connectContext = createContext<connectContextValue | undefined>(
  undefined
);

const ConnectionContextProvider = ({
  children,
}: ConnectionContextProviderProps) => {
  const [data, setData] = useState(getConnections());
  const [pos, setPos] = useState<any>(null);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    data && setConnections(data);
  }, [data]);

  return (
    <connectContext.Provider
      value={{ data, setData, pos, setPos, selected, setSelected }}
    >
      {children}
    </connectContext.Provider>
  );
};

export const useConnectContext = () => useContext(connectContext);
export default ConnectionContextProvider;
