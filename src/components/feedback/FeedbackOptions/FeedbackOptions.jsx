import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptList, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptList>
      {options.map(item => (
        <li key={item}>
          <Button type="button" onClick={onLeaveFeedback}>
            {item}
          </Button>
        </li>
      ))}
    </FeedbackOptList>
  );
}

FeedbackOptions.protoTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
