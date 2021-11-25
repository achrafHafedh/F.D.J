import { FunctionComponent } from "react";
import { NumbersProps } from "./Types";
import Number from "../../Components/Number";
import { NUMBERS_LENGTH } from "../../Config";

import "./Numbers.scss";

const Numbers: FunctionComponent<NumbersProps> = ({}) => {
  const renderNumbers = () => {
    const listNumber = [];
    for (let index = 0; index < NUMBERS_LENGTH; index++) {
      listNumber.push(
        <Number className={index < 9 ? "small" : ""} index={index} value={index + 1} onClick={() => ""} />
      );
    }
    return listNumber;
  };

  return <div className="container-numbers">{renderNumbers()}</div>;
};

export default Numbers;
