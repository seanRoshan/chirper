import React from 'react';
import './styles/App.scss';
import {Col, Container, Row, Spinner} from "react-bootstrap";

function App() {
  return (
      <Container fluid >
          <Row>
              <Col className="center">
                  <h1 className="header-text">Chirper Application!</h1>
                  <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                  </Spinner>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
