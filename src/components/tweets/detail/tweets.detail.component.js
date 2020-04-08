import React, {Component} from 'react';
import {connect} from "react-redux";
import {TweetUtility} from "../../../utils";
import {TiArrowBackOutline} from 'react-icons/ti/index'
import {TiHeartOutline} from 'react-icons/ti/index'
import {TiHeartFullOutline} from 'react-icons/ti/index'
import {handleToggleTweet} from "../../../actions/tweets.actions";


class TweetsDetailComponent extends Component {

    handleLike = (e) => {
        e.preventDefault();
        const {dispatch, tweet, authenticatedUser} = this.props;
        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authenticatedUser
        }));
    };

    toParent = (e, id) => {
        e.preventDefault()
        // todo: Redirect to parent Tweet.
    };

    render() {

        const {tweet} = this.props;
        const {name, avatar, timestamp, text, hasLiked, likes, replies, parent} = tweet;

        return (
            <div className='tweet'>
                <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{TweetUtility.formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon'/>
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {hasLiked === true
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon'/>
                                : <TiHeartOutline className='tweet-icon'/>}
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </div>
        );
    }
}


// authenticatedUser, users, tweets come from store
// id comes from prop
function mapStateToProps({authenticatedUser, users, tweets}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authenticatedUser,
        tweet: tweet
            ? TweetUtility.formatTweet(tweet, users[tweet.author], authenticatedUser, parentTweet)
            : null
    };
}

export default connect(mapStateToProps)(TweetsDetailComponent);
