import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Container/Section'
import Statistics from './components/Statistics/Statistics';
import './index.module.css'



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

    arrButton () {
        return ['good', 'neutral', 'bad']
    }

    render() {
        const { good, neutral, bad } = this.state
        
        return (
            <Section title='Please leave feedback'>
                <FeedbackOptions
                   options={this.arrButton()}
                   onLeaveFeedback={this.handleChange}
                />

                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback ()}
                    positivePercentage={this.countPositiveFeedbackPercentage ()}
                />
            </Section>
        )
    }
}

export default Feedback;