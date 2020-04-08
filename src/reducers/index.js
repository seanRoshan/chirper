import {combineReducers} from "redux";
import authenticatedUser from "./authenticatedUser.reducer";
import users from "./users.reducer";
import tweets from "./tweets.reducer";
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    authenticatedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
})
