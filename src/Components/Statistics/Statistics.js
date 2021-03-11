import React from 'react';
import Notification from '../Notification/Notification'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <h1>Statistics</h1>

            {total > 0 ?
                (
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive feedback: {positivePercentage}%</li>
                    </ul>
                ) : (
                    <Notification message="No feedback given"/>
                )
            }
        </div>
    );
}

Statistics.defaultProps = {
    total: 0,
    positivePercentage: 0
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
 
export default Statistics;