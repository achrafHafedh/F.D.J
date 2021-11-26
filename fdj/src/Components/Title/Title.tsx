import { FunctionComponent } from "react";

import { TitleProps } from "./Types";

import "./Title.scss";

const Title: FunctionComponent<TitleProps> = ({ text }) => {
  return <div className="title">{text}</div>;
};

export default Title;
