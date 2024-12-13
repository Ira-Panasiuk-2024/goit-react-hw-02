import PropTypes from 'prop-types';
import { VscSmiley } from 'react-icons/vsc';
import { PiSmileyMeh } from 'react-icons/pi';
import { PiSmileySad } from 'react-icons/pi';
import css from './Feedback.module.css';

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <>
      <ul className={css.feedbackList}>
        <li>
          <VscSmiley size={24} color="green" />
          <p className={css.feedbackText}>Good: {good}</p>
        </li>
        <li>
          <PiSmileyMeh size={24} color="orange" />
          <p className={css.feedbackText}>Neutral: {neutral}</p>
        </li>
        <li>
          <PiSmileySad size={24} color="red" />
          <p className={css.feedbackText}>Bad: {bad}</p>
        </li>
      </ul>
      <div className={css.feedbackStats}>
        <p className={css.feedbackText}>Total: {totalFeedback}</p>
        <p className={css.feedbackText}> Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Feedback;
