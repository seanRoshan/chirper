import {TweetService} from "../services";
import {receiveUsers} from "./users.actions";
import {receiveTweets} from "./tweets.actions";
import {setAuthenticatedUser} from "./authenticatedUser.actions";
import {hideLoading, showLoading} from "react-redux-loading-bar";

const AUTHENTICATED_USER_ID = 'sarah_edo';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return TweetService.getInitialData()
            .then(({tweets, users}) => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dispatch(setAuthenticatedUser(AUTHENTICATED_USER_ID));
                dispatch(hideLoading());
            })
    }
}
