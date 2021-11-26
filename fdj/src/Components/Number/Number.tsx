import { FormEvent, FunctionComponent } from "react";
import { NumberProps } from "./Types";
import { GateReducerActions } from "../../Wrapper/Gate/Types";

import "./Number.scss";

const Number: FunctionComponent<NumberProps> = ({ index, value, dispatch, className }) => {
  return (
    <div className="container-number">
      <input
        type="checkbox"
        onChange={(value: FormEvent<HTMLInputElement>) => {
          dispatch({
            type: GateReducerActions.TOGGLE_NUMBER,
            payload: {
              value: value.currentTarget.value,
              checked: value.currentTarget.checked,
            },
          });
        }}
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
