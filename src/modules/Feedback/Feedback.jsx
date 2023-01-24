import { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './FeedbackOptions/Section/Section';
import Notification from 'shared/Notification/Notification';

import styles from './feedback.module.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positivePercentage = this.state[propName];
    const result = ((positivePercentage / total) * 100).toFixed(2);
    return Number(result);
  }

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  //   increaseGood = () => {
  //     this.setState(prevState => {
  //       return { good: prevState.good + 1 };
  //     });
  //   };
  //   increaseNeutral = () => {
  //     this.setState(prevState => {
  //       return { neutral: prevState.neutral + 1 };
  //     });
  //   };
  //   increaseBad = () => {
  //     this.setState(prevState => {
  //       return { bad: prevState.bad + 1 };
  //     });
  //   };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage('good');
    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;
