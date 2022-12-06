import React from 'react';
import PropTypes from 'prop-types';
import { Stats } from './Statistics.styled';

export function Statistics({
  goodVal,
  neutralVal,
  badVal,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <Stats>Good: {goodVal}</Stats>
      </li>
      <li>
        <Stats>Neutral: {neutralVal}</Stats>
      </li>
      <li>
        <Stats>Bad: {badVal}</Stats>
      </li>

      {goodVal > 0 || badVal > 0 || neutralVal > 0 ? (
        <>
          <li>
            <Stats>Total: {total}</Stats>
          </li>
          <li>
            <Stats>Positive feedback: {positivePercentage} %</Stats>
          </li>
        </>
      ) : (
        ''
      )}
    </ul>
  );
}

Statistics.propTypes = {
  goodVal: PropTypes.number.isRequired,
  neutralVal: PropTypes.number.isRequired,
  badVal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
