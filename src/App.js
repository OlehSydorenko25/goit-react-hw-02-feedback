import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Container from './Components/Container/Container'
import Statistics from './Components/Statistics/Statistics';
import styles from './index.module.css'



class Feedback extends Component {
    static defaultProps = {
        // 
    }

    static propTypes = {
        // 
    }
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleChange = event => {
        const { name } = event.target;

        this.setState(prevState => ({
        [name]: prevState[name] + 1,
        }));
    };

    countTotalFeedback() {
        const {good, neutral, bad} = this.state
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage () {
        return Math.round((this.state.good * 100 ) / this.countTotalFeedback())
    }

    render() {
        const buttons = ['good', 'neutral', 'bad']
        const {good, neutral, bad} = this.state
        return (
            <Container>
                <FeedbackOptions
                   options={buttons}
                   onLeaveFeedback={this.handleChange}
                />

                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback ()}
                    positivePercentage={this.countPositiveFeedbackPercentage ()}
                />
            </Container>
        )
    }
}

export default Feedback;