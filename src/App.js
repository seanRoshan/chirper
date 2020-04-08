import React, {Component} from 'react';
import './styles/Application.scss';
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared.actions";
import DashboardComponent from "./views/dashboard/dashboard.component";
import LoadingComponent from "./components/loading/loading.component";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import {HashRouter} from "react-router-dom";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <HashRouter basename="/">
                    <div className="header"><NavbarComponent/></div>
                    <div className="content">
                        {this.props.authenticatedUser !== null ? <DashboardComponent/> : <LoadingComponent/>}
                    </div>
                    <div className="footer"><FooterComponent/></div>
                </HashRouter>
            </div>
        )
    }
}


function mapStateToProps({authenticatedUser}) {
    return {
        authenticatedUser
    }
}

export default connect(mapStateToProps)(App);
