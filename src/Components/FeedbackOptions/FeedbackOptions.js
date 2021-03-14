import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
    return (
        <div>
            

            {options.map((option) => {
                return (
                    <button key={option} type='button' name={option} onClick={onLeaveFeedback} className={styles.button}>{option}</button>
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