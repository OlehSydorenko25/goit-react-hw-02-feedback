import React from 'react';
import PropTypes from 'prop-types';
import styles from'./Section.module.css'


const Section = ({ children, title }) => {
  return <div className={styles.container}>
    <h1>{title}</h1>
    {children}
  </div>;
};

Section.propTypes = {
  children: PropTypes.node,
};

Section.defaultProps = {
  children: [],
};

export default Section;