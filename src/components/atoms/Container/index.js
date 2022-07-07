import styled from 'styled-components';

export default styled.div`
  ${props => props}
  padding: 0 48px;
  max-width: 1600px;
  margin: 0 auto;
  position: relative;

  ${props => props.theme.is.xxl}{
    overflow-x: hidden;
  }

  ${props => props.theme.is.sm}{
    padding: 0 32px;
  }
`;