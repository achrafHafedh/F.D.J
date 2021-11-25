import { FunctionComponent } from "react";
import { StarsProps } from "./Types";
import Star from "../../Components/Star";
import { STARS_LENGTH } from "../../Config";

import "./Stars.scss";

const Stars: FunctionComponent<StarsProps> = ({}) => {
  const renderStars = () => {
    const listStar = [];
    for (let index = 0; index < STARS_LENGTH; index++) {
      listStar.push(<Star className={index >= 9 ? "big" : ""} index={index} value={index + 1} onClick={() => ""} />);
    }
    return listStar;
  };

  return <div className="container-numbers">{renderStars()}</div>;
};

export default Stars;
