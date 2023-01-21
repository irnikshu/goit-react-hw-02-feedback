import PropTypes from 'prop-types';
import styles from '../feedback.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={styles.blockResult}>
        <p className={styles.result}>Good: {good}</p>
        <p className={styles.result}>Neutral: {neutral}</p>
        <p className={styles.result}>Bad: {bad}</p>
        <p className={styles.result}>Total: {total}</p>
        <p className={styles.result}>Positive feedback: {positivePercentage}</p>
      </div>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
