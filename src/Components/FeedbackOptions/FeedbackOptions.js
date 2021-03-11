import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <h1>Please leave feedback</h1>

            {options.map((option, index) => {
                return (
                    <button key={index} type='button' name={option} onClick={onLeaveFeedback} className={styles.button}>{option}</button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
 
export default FeedbackOptions;