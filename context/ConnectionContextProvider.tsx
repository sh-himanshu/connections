import { createContext, useContext, useState } from "react";

interface Person {
  name: string;
  friends: string[];
}

interface connectContextValue {
  data: Person[];
  setData: React.Dispatch<React.SetStateAction<Person[]>>;
  pos: any;
  setPos: React.Dispatch<any>;
}

interface ConnectionContextProviderProps {
  children: React.ReactNode;
}

const dataInitialState: Person[] = [
  {
    name: "Sameer",
    friends: ["Aayushi", "Kamalnath Sharma"],
  },
  {
    name: "Aayushi",
    friends: ["Bhaskar"],
  },
  {
    name: "Kamalnath Sharma",
    friends: ["Santi Kumar Saha"],
  },
  {
    name: "Santi Kumar Saha",
    friends: ["Bhaskar"],
  },
  {
    name: "Bhaskar",
    friends: ["Santi Kumar Saha", "Aayushi"],
  },
];

const connectContext = createContext<connectContextValue | undefined>(
  undefined
);

const ConnectionContextProvider = ({
  children,
}: ConnectionContextProviderProps) => {
  const [data, setData] = useState(dataInitialState);
  const [pos, setPos] = useState<any>(null);

  return (
    <connectContext.Provider value={{ data, setData, pos, setPos }}>
      {children}
    </connectContext.Provider>
  );
};

export const useConnectContext = () => useContext(connectContext);
export default ConnectionContextProvider;
