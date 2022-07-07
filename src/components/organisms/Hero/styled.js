import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  max-width: 810px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 120px 0 160px 120px;

  ${props => props.theme.is.md}{
    margin: 64px;
  }

  ${props => props.theme.is.sm}{
    margin: 48px 0;
  }
`;