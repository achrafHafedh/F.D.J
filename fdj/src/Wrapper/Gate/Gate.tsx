import { FunctionComponent } from "react";
import { GateProps } from "./Types";
import Numbers from "../Numbers";
import Stars from "../Stars";
import { Row, Col } from "reactstrap";

import "./Gate.scss";

const Gate: FunctionComponent<GateProps> = ({}) => {
  return (
    <Row className="gate">
      <Col sm="8">
        <Numbers />
      </Col>
      <Col sm="4">
        <Stars />
      </Col>
    </Row>
  );
};

export default Gate;
