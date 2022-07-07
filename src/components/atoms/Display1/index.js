import styled from 'styled-components';

export default styled.p`
  ${props => props}
  background-color: ${props => props.theme.colors[props.bg]};
  font-size: ${props => props.theme.fontSize.display1};
  line-height: calc(${props => props.theme.fontSize.display1} + 8px);
  color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.bold};

  ${props => props.theme.is.sm}{
    font-size: ${props => props.theme.fontSize.display2};
    line-height: ${props => props.theme.fontSize.display1};
  }
`;