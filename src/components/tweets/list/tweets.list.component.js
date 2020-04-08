import React from 'react';

function TweetsListComponent(props) {

    const {title, list} = props;

    return (
        <React.Fragment>
            {title && <h3 className="center">{title}</h3>}
            {list && list.length ?
                list.map((tweetId) => (<li key={tweetId}>{tweetId}</li>)) :
                <h3 className="center">NO CONTENT</h3>
            }
        </React.Fragment>
    );
}

export default TweetsListComponent;
