import styled from 'styled-components';

export default styled.p`
  ${props => props}
  color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.body};
  line-height: calc(${props => props.theme.fontSize.body} + 8px);

  ${props => props.theme.is.sm}{
    font-size: ${props => props.theme.fontSize.text};
    line-height: calc(${props => props.theme.fontSize.text} + 8px);
  }
`;