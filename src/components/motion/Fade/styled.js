import styled from 'styled-components';

export const Component = styled.div`
  opacity: ${props => props.isIntersecting ? 1 : 0};
  transform: ${props => props.isIntersecting ? "translateY(0)" : "translateY(48px)"};
  transition: ${props => props.theme.transition.default} ${props => props.delay};
`;