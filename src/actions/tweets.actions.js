import {TweetService} from "../services";

export const TWEETS_ACTION_TYPES = {
    RECEIVE_TWEETS: 'RECEIVE_TWEETS',
    TOGGLE_TWEET: 'TOGGLE_TWEET'
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
