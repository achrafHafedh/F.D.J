import { FormEvent, FunctionComponent } from "react";
import { StarProps } from "./Types";

import "./Star.scss";

const Star: FunctionComponent<StarProps> = ({ index, value, onClick, className }) => {
  return (
    <div className="container-star">
      <input
        type="checkbox"
        onChange={(v: FormEvent<HTMLInputElement>) =>
          console.log({ v: v.currentTarget.value, checked: v.currentTarget.checked })
        }
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
