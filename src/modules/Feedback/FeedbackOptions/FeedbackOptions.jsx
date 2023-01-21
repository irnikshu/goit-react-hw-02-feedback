import PropTypes from 'prop-types';
import Button from 'shared/Button/Button';
import styles from '../feedback.module.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.blockBtn}>
        <Button
          onClick={() => onLeaveFeedback('good')}
          text="Good"
          type="button"
        />
        <Button
          onClick={() => onLeaveFeedback('neutral')}
          text="Neutral"
          type="button"
        />
        <Button
          onClick={() => onLeaveFeedback('bad')}
          text="Bad"
          type="button"
        />
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
