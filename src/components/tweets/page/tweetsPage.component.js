import React, {Component} from 'react';
import {connect} from "react-redux";
import TweetsDetailComponent from "../detail/tweets.detail.component";
import TweetsComposeComponent from "../compose/tweets.compose.component";
import TweetsListComponent from "../list/tweets.list.component";

class TweetsPageComponent extends Component {
    render() {

        const {id, replies} = this.props;

        return (
            <div>
                <TweetsDetailComponent id={id}/>
                <TweetsComposeComponent id={id}/>
                <TweetsListComponent list={replies} title="Replies"/>
            </div>
        );
    }
}

function mapStateToProps({tweets}, {match}) {
    const {id} = match.params;

    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
    }

}

export default connect(mapStateToProps)(TweetsPageComponent);
