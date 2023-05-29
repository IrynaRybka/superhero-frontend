import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavGoBack = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 60px;
  border-radius: 6px;
  border: 2px orange solid;
  text-decoration: none;
  color: #362115;
  width: 110px;

  :not(last-child) {
    margin-right: 10px;
  }

  &.active {
    background-color: orange;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;
