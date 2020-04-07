import {TWEETS_ACTION_TYPES} from "../actions/tweets.actions";

export default function tweets(state = {}, action) {
    switch (action.type) {
        case TWEETS_ACTION_TYPES.RECEIVE_TWEETS: {
            return {
                ...state,
                ...action.tweets
            }
        }
        default: {
            return state
        }
    }
}
