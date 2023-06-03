import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (total === 0) {
    return <p>Leave feedback</p>;
  }

  return (
    <ul>
      <li>
        <p>Brazilian Arabica: {good}</p>
      </li>
      <li>
        <p>Classic Arabica: {neutral}</p>
      </li>
      <li>
        <p>Looks like 3 in 1: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {Math.floor(positivePercentage)}%</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
