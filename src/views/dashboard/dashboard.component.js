import React, {Component} from "react";
import {connect} from "react-redux";

class DashboardComponent extends Component {

    render() {
        console.log(this.props);
        return (<div>
            <h1 className="center">TWEETS TIMELINE</h1>
            {this.props.tweetsIds.map((tweetId) => (
                <li key={tweetId}>{tweetId}</li>
            ))}
        </div>)
    }
}


function mapStateToProps({tweets}) {
    return {tweetsIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)};
}

export default connect(mapStateToProps)(DashboardComponent);
