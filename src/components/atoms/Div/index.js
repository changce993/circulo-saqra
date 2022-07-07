import styled from 'styled-components';

export default styled.div`
  ${props => props}
  background: ${props => props.theme.colors[props.bg]};
`;