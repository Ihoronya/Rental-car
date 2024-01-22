import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: #316b31;
  font-weight: 700;
  text-decoration: underline;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #43b043;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 24px;
`;
