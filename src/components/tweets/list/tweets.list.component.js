import React from 'react';
import TweetsDetailComponent from "../detail/tweets.detail.component";

function TweetsListComponent(props) {

    const {title, list} = props;

    return (
        <React.Fragment>
            {title && <h3 className="center">{title}</h3>}
            {list && list.length ?
                list.map((tweetId) => (<TweetsDetailComponent key={tweetId} id={tweetId}/>)) :
                <h3 className="center">NO CONTENT</h3>
            }
        </React.Fragment>
    );
}

export default TweetsListComponent;
