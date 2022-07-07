import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.caption};
  text-decoration: none;
  cursor: pointer;
  opacity: ${props => props.disable && ".5"};

  :hover {
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition.default};
  }
`;