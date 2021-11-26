import { FunctionComponent } from "react";

import { CostProps } from "./Types";

import "./Cost.scss";

const Cost: FunctionComponent<CostProps> = ({ cost }) => {
  return <div className="cost">Mise totale {cost}</div>;
};

export default Cost;
