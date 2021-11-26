import { FunctionComponent, useReducer } from "react";
import { Row, Col } from "reactstrap";

import { GateProps } from "./Types";
import Numbers from "../Numbers";
import Stars from "../Stars";
import { ApiResponse, initState } from "../../Config";
import { gateReducer } from "./Gate.reducer";
import { getCost } from "./utils";
import Cost from "../../Components/Cost";
import Title from "../../Components/Title";

import "./Gate.scss";

const Gate: FunctionComponent<GateProps> = () => {
  const [GateState, dispatch] = useReducer(gateReducer, initState);

  return (
    <Row className="gate">
      <Row className="header-gate">
        <Col sm="8">
          <Title text="Grille" />
        </Col>
        <Col sm="4">
          <Cost cost={getCost(ApiResponse.multiples, GateState)} />
        </Col>
      </Row>
      <Row className="content-gate">
        <Col sm="8">
          <Numbers dispatch={dispatch} />
        </Col>
        <Col sm="4">
          <Stars dispatch={dispatch} />
        </Col>
      </Row>
    </Row>
  );
};

export default Gate;
