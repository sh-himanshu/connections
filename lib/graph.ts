import { SerializedGraph } from "graphology-types";

const defaultData: SerializedGraph = {
  attributes: {},
  nodes: [
    { key: "Sameer" },
    { key: "Aayushi" },
    { key: "Kamalnath Sharma" },
    { key: "Santi Kumar Saha" },
    { key: "Bhaskar" },
  ],
  edges: [
    {
      key: "geid_116_0",
      source: "Sameer",
      target: "Aayushi",
      undirected: true,
    },
    {
      key: "geid_116_1",
      source: "Sameer",
      target: "Kamalnath Sharma",
      undirected: true,
    },
    {
      key: "geid_116_2",
      source: "Aayushi",
      target: "Bhaskar",
      undirected: true,
    },
    {
      key: "geid_116_3",
      source: "Kamalnath Sharma",
      target: "Santi Kumar Saha",
      undirected: true,
    },
    {
      key: "geid_116_4",
      source: "Santi Kumar Saha",
      target: "Bhaskar",
      undirected: true,
    },
  ],
  options: { type: "mixed", multi: false, allowSelfLoops: true },
};

export const getConnections = () => {
  if ("connectionData" in localStorage) {
    try {
      const stringfyData = localStorage.getItem("connectionData");
      if (stringfyData) return JSON.parse(stringfyData) as SerializedGraph;
    } catch (error) {
      console.error(error);
    }
  }
  return defaultData;
};

export const setConnections = (graphData: SerializedGraph) => {
  localStorage.setItem("connectionData", JSON.stringify(graphData));
};
