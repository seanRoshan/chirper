import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import TweetsListComponent from "../../components/tweets/list/tweets.list.component";

class DashboardComponent extends Component {

    render() {
        return (<div className="dashboard-view">
            <Route exact path='/' render={() => {
                return (<TweetsListComponent title="YOUR TWEETS" list={this.props.tweetIds}/>)
            }}>
            </Route>
            <Route exact path='/new' render={() => {
                return (<h3 className="center">NEW TWEET COMPONENT</h3>)
            }}>
            </Route>
        </div>)
    }
}


function mapStateToProps({tweets}) {
    return {tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)};
}

export default connect(mapStateToProps)(DashboardComponent);
