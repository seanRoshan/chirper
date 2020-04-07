import React, {Component} from 'react';
import './styles/App.scss';
import {Col, Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared.actions";
import DashboardComponent from "./views/dashboard/dashboard.component";
import LoadingComponent from "./components/loading/loading.component.";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {this.props.authenticatedUser !== null ? <DashboardComponent/> : <LoadingComponent/>}
                    </Col>
                </Row>
            </Container>
        )
    }
}


function mapStateToProps({authenticatedUser}) {
    return {
        authenticatedUser
    }
}

export default connect(mapStateToProps)(App);
