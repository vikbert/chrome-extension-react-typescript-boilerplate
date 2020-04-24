import React from "react";
import { useEvent } from "../hooks/useEvent";

const App = (): JSX.Element => {
  useEvent("App mounted");
  return <div>Hello, World!</div>;
};

export default App;
