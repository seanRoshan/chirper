import {TweetBackend} from "../../backend/tweet/tweet.backend";

export class TweetService {
    static getInitialData() {
        return Promise.all([
            TweetBackend.getUsers(),
            TweetBackend.getTweets(),
        ]).then(([users, tweets]) => ({
            users,
            tweets,
        }))
    }

    static saveLikeToggle(info) {
        return TweetBackend.saveLikeToggle(info)
    }

    static saveTweet(info) {
        return TweetBackend.saveTweet(info)
    }

}
