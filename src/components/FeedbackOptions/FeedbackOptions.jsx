import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        className={styles.Button}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
