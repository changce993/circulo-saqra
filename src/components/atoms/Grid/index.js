import styled from 'styled-components';

export default styled.section`
  ${props => props}
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;