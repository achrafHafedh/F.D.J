import { FormEvent, FunctionComponent } from "react";
import { NumberProps } from "./Types";

import "./Number.scss";

const Number: FunctionComponent<NumberProps> = ({ index, value, onClick, className }) => {
  return (
    <div className="container-number">
      <input
        type="checkbox"
        onChange={(v: FormEvent<HTMLInputElement>) =>
          console.log({ v: v.currentTarget.value, checked: v.currentTarget.checked })
        }
        id={`number-${index}`}
        className="visually-hidden"
        value={value}
      />
      <label className={className} htmlFor={`number-${index}`}>
        {value}
      </label>
      <div className="number"></div>
    </div>
  );
};

export default Number;
