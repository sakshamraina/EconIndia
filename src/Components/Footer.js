import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <p className="text-center">
              Created by <br></br>16010120189 - Navkar Shah, 16010120203 - Aayush Durgule,
              16010120204 - Saksham Raina
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
