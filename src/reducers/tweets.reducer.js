import {TWEETS_ACTION_TYPES} from "../actions/tweets.actions";

export default function tweets(state = {}, action) {
    switch (action.type) {
        case TWEETS_ACTION_TYPES.RECEIVE_TWEETS: {
            return {
                ...state,
                ...action.tweets
            }
        }
        case TWEETS_ACTION_TYPES.TOGGLE_TWEET: {
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authenticatedUser)
                        : state[action.id].likes.concat(action.authenticatedUser)
                }
            }
        }
        case TWEETS_ACTION_TYPES.ADD_TWEET: {
            const {tweet} = action;

            let replyingTo = {};

            if (tweet.replyingTo) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: tweet,
                ...replyingTo
            }
        }
        default: {
            return state
        }
    }
}
