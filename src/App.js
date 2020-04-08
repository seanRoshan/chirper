import React, {Component} from 'react';
import './styles/Application.scss';
import {connect} from "react-redux";
import {handleInitialData} from "./actions/shared.actions";
import DashboardComponent from "./views/dashboard/dashboard.component";
import LoadingComponent from "./components/loading/loading.component";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import {HashRouter} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    render() {
        const {authenticatedUser, loadingBar} = this.props;
        return (
            <div>
                <HashRouter basename="/">
                    <div className="header">
                        <LoadingBar/>
                        <NavbarComponent isLoading={loadingBar.default}/>
                    </div>
                    <div className="content">
                        {authenticatedUser !== null
                            ? <DashboardComponent/>
                            : loadingBar.default ? <LoadingComponent/> : <h3>Access Denied!</h3>}
                    </div>
                    <div className="footer"><FooterComponent/></div>
                </HashRouter>
            </div>
        )
    }
}


function mapStateToProps({authenticatedUser, loadingBar}) {
    return {
        authenticatedUser,
        loadingBar
    }
}

export default connect(mapStateToProps)(App);
