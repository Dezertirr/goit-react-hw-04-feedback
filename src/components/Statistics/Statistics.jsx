import propTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    if (total === 0) {
        return (
            <p>leave feedback</p>
        )
    }
    return ( 
      <ul>
        <li>
          <p>Brazilian Arabica: {good}</p>
        </li>
        <li>
          <p>Classic arrabica: {neutral}</p>
        </li>
        <li>
          <p>looks like 3 in 1: {bad}</p>
        </li>
        <li>
          <p>total: {total}</p>
        </li>
        <li>
          <p>positive feedback: {Math.floor(positivePercentage)}%</p>
        </li>
      </ul>
    );
  };

  Statistics.propTypes = {
good:propTypes.number,
neutral:propTypes.number,
bad:propTypes.number,
total:propTypes.number,
positivePercentage:propTypes.number,
  }

