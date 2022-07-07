import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ${props => props.theme.is.sm}{
    display: none;
  }
`;