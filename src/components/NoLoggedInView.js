import React from "react";
import { Col, Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import notLoggedInImage from "../assets/image/lock.webp";

function NoLoggedInView(props) {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <Image src={`${notLoggedInImage}`} style={{ width: "80%" }} />
          </Col>
          <Col>
            <h1>Login Required</h1>
            <p>
              You're not logged in. Please <Link to="/login">login</Link> first
              as this access is limited.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NoLoggedInView;
