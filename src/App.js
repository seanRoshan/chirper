import React, {Component} from 'react';
import './styles/App.scss';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared.actions";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="center">
                        <h1 className="header-text">Chirper Application!</h1>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(App);
