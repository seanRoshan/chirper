export const TWEETS_ACTION_TYPES = {
    RECEIVE_TWEETS: 'RECEIVE_TWEETS'
    
};

export function receiveTweets(tweets) {
    return {
        type: TWEETS_ACTION_TYPES.RECEIVE_TWEETS,
        tweets
    }
}
