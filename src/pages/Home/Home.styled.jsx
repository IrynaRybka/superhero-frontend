import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(NavLink)`
  transform: scale(1);
  transition-property: transform;
  transition-duration: 1000ms;
  transition-timing-function: linear;
  &:hover {

  transform: scale(1.1);
}

/* @keyframes changeSize {
  0% {
    transform: scale(0.5);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(0.2);
}
} */
`
 

 