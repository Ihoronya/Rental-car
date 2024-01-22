import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const List = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 24px;
  color: #285928;
  &:is(:hover, :focus) {
    color: #43b043;
  }

  &.active {
    color: #43b043;
  }
`;

export const LogoText = styled.span`
  color: #285928;
  font-weight: 700;
  font-size: 16px;
`;

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:is(:hover, :focus) > span {
    color: #0b44cd;
  }
`;
