import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { target } = event;
    const key = target.textContent.toLowerCase();
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0
    );
    return Math.floor((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={' Statistics'}>
          {!total ? (
            <Notification message={'There is no feedback'}></Notification>
          ) : (
            <Statistics
              goodVal={this.state.good}
              neutralVal={this.state.neutral}
              badVal={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
