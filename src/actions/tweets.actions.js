import {TweetService} from "../services";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const TWEETS_ACTION_TYPES = {
    RECEIVE_TWEETS: 'RECEIVE_TWEETS',
    TOGGLE_TWEET: 'TOGGLE_TWEET',
    ADD_TWEET: 'ADD_TWEET'
};

export function receiveTweets(tweets) {
    return {
        type: TWEETS_ACTION_TYPES.RECEIVE_TWEETS,
        tweets
    }
}

export function toggleTweet({id, authenticatedUser, hasLiked}) {
    return {
        type: TWEETS_ACTION_TYPES.TOGGLE_TWEET,
        id,
        authenticatedUser,
        hasLiked
    }
}

export function handleToggleTweet(tweet) {
    return (dispatch) => {
        dispatch(toggleTweet(tweet));

        return TweetService.saveLikeToggle(tweet)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e);
                dispatch(toggleTweet(tweet));
                alert("There was an error linking the tweet. Try again!")
            });
    }
}

export function addTweet(tweet) {
    return {
        type: TWEETS_ACTION_TYPES.ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) {
    return ((dispatch, getState) => {
        const {authenticatedUser} = getState();

        dispatch(showLoading());

        return TweetService.saveTweet({
            text,
            author: authenticatedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
    });
}
