import {users, tweets} from "./data";

export class TweetBackend {

    static generateUID() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    static getUsers() {
        return new Promise((res, rej) => {
            setTimeout(() => res({...users}), 1000)
        })
    }

    static getTweets() {
        return new Promise((res, rej) => {
            setTimeout(() => res({...tweets}), 1000)
        })
    }

    static saveLikeToggle({id, hasLiked, authedUser}) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                tweets = {
                    ...tweets,
                    [id]: {
                        ...tweets[id],
                        likes: hasLiked === true
                            ? tweets[id].likes.filter((uid) => uid !== authedUser)
                            : tweets[id].likes.concat([authedUser])
                    }
                };
                res()
            }, 500)
        })
    }

    static formatTweet({author, text, replyingTo = null}) {
        return {
            author,
            id: TweetBackend.generateUID(),
            likes: [],
            replies: [],
            text,
            timestamp: Date.now(),
            replyingTo,
        }
    }

    static saveTweet({text, author, replyingTo}) {
        return new Promise((res, rej) => {
            const formattedTweet = TweetBackend.formatTweet({
                text,
                author,
                replyingTo
            });

            setTimeout(() => {
                tweets = {
                    ...tweets,
                    [formattedTweet.id]: formattedTweet,
                };

                users = {
                    ...users,
                    [author]: {
                        ...users[author],
                        tweets: users[author].tweets.concat([formattedTweet.id])
                    }
                };

                res(formattedTweet)
            }, 1000)
        })
    }

}