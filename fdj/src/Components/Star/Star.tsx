import { FormEvent, FunctionComponent } from "react";

import { StarProps } from "./Types";
import { GateReducerActions } from "../../Wrapper/Gate/Types";

import "./Star.scss";

const Star: FunctionComponent<StarProps> = ({ index, value, dispatch, className }) => {
  return (
    <div className="container-star">
      <input
        type="checkbox"
        onChange={(value: FormEvent<HTMLInputElement>) => {
          dispatch({
            type: GateReducerActions.TOGGLE_STAR,
            payload: {
              value: value.currentTarget.value,
              checked: value.currentTarget.checked,
            },
          });
        }}
        id={`star-${index}`}
        className="visually-hidden"
        value={value}
      />
      <label className={className} htmlFor={`star-${index}`}>
        {value}
      </label>
      <div className="star"></div>
    </div>
  );
};

export default Star;
