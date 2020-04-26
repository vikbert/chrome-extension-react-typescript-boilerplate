import React from "react";
import "./app.scss";
import '../style/weui.less'
import { Button } from "react-weui";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <p className="content">Hello, World!</p>
      <Button>weui button</Button>
    </div>
  );
};

export default App;
