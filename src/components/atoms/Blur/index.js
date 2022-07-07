import styled from 'styled-components';

export default styled.div`
  width: ${props => props.size || "640px"};
  height: ${props => props.size || "640px"};
  background-color: ${props => props.theme.colors[props.color] || props.theme.colors.secondary};
  position: ${props => props.position || "absolute"};
  top: ${props => props.top || "-160px"};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right || "-160px"};
  z-index: -100;
  border-radius: 50%;
  filter: blur(100px);
  opacity: ${props => props.opacity || ".4"};

  ${props => props.theme.is.sm}{
    right: -320px;
    top: -320px;
  }
`;