import styles from './App.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default: {
        console.log('There is no such option');
      }
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    (good / (good + (neutral + bad))) * 100;

  return (
    <div className={styles.Feedback}>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />

      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
