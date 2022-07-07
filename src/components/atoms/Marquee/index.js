import styled from 'styled-components';

export default styled.p`
  font-size: ${props => props.theme.fontSize.marquee};
  color: transparent;
  -webkit-text-stroke: 2px ${props => props.theme.colors.secondary};
  opacity: .3;
`;