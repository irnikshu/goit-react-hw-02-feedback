import PropTypes from 'prop-types';
// import Button from 'shared/Button/Button';
import styles from './feedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map(option => (
    <button
      type="button"
      className={styles.btn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));

  return <ul className={styles.listButtons}>{elements}</ul>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
