import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={styles.btn} type={type}>
      {text}
    </button>
  );
};
export default Button;
Button.prototypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  text: PropTypes.string.isRequired,
};
