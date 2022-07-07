import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  position: absolute;
  top: 650px;
  left: 16px;
  transform: rotate(-90deg);

  ${props => props.theme.is.md}{
    top: 520px;
    left: -16px;
  }

  ${props => props.theme.is.sm}{
    position: static;
    transform: rotate(0deg);
  }
`;