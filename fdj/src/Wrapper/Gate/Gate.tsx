import { FunctionComponent, useReducer } from "react";
import { Row, Col } from "reactstrap";

import { GateProps } from "./Types";
import Numbers from "../Numbers";
import Stars from "../Stars";
import { ApiResponse, initState } from "../../Config";
import { gateReducer } from "./Gate.reducer";
import { getCost } from "./utils";

import "./Gate.scss";

const Gate: FunctionComponent<GateProps> = () => {
  const [GateState, dispatch] = useReducer(gateReducer, initState);

  return (
    <Row className="gate">
      <Col sm="8">
        <Numbers dispatch={dispatch} />
      </Col>
      <Col sm="4">
        <Stars dispatch={dispatch} />
      </Col>
      <div>Cost : {getCost(ApiResponse.multiples, GateState)}</div>
    </Row>
  );
};

export default Gate;
