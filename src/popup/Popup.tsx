import React, { useEffect } from "react";
import App from "../components/app";
import "./Popup.scss";
import { useEvent } from "../hooks/useEvent";

export default function Popup(): JSX.Element {
  useEvent("Popup mounted");
  return (
    <div className={"popup"}>
      <App />
    </div>
  );
}
