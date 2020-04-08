import React, {Component} from 'react';
import {connect} from "react-redux";
import {handleAddTweet} from "../../../actions/tweets.actions";

class TweetsComposeComponent extends Component {

    state = {
        text: '',
    };

    handleChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({
            text
        }))
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {text} = this.state;

        const {dispatch, id} = this.props;

        console.log('New Tweet: ', text);

        dispatch(handleAddTweet(text, id));

        this.setState(() => ({
            text: ''
        }))
    };


    render() {
        const {text} = this.state;

        /* todo: Redirect to / if submitted */

        const tweetLeft = 280 - text.length;

        return (
            <React.Fragment>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
            <textarea
                placeholder="What's happening?"
                value={text}
                onChange={this.handleChange}
                className='textarea'
                maxLength={280}
            />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='tweet-submit-button'
                        type='submit'
                        disabled={text
                        === ''}>
                        Submit
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect()(TweetsComposeComponent);
