import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import TweetsListComponent from "../../components/tweets/list/tweets.list.component";
import TweetsComposeComponent from "../../components/tweets/compose/tweets.compose.component";
import TweetsPageComponent from "../../components/tweets/page/tweetsPage.component";

class DashboardComponent extends Component {

    render() {
        const {tweetIds} = this.props;
        return (<div className="dashboard-view">
            <Route exact path='/' render={() => {
                return (<TweetsListComponent title="Your Tweets" list={tweetIds}/>)
            }}>
            </Route>
            <Route path="/new" component={TweetsComposeComponent}/>
            <Route path='/tweet/:id' component={TweetsPageComponent}/>
        </div>)
    }
}


function mapStateToProps({tweets}) {
    return {
        tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp),
    };
}

export default connect(mapStateToProps)(DashboardComponent);
