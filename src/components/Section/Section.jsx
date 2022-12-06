import PropTypes from 'prop-types';
import { SectionStyle, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
