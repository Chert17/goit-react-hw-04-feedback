import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptList, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptList>
      {Object.keys(options).map(key => (
        <li key={key}>
          <Button type="button" onClick={onLeaveFeedback}>
            {key}
          </Button>
        </li>
      ))}
    </FeedbackOptList>
  );
}

FeedbackOptions.protoTypes = {
  options: PropTypes.shape({}).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
