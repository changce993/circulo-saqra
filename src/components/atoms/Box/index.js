import styled from 'styled-components';
import { Div } from 'components/atoms';

export default styled(Div)`
  ${props => props}
  opacity: .5;
  position: absolute;
  height: ${props => props.vertical ? "160px" : props.height || "80px"};
  width: ${props => props.vertical ? "64px" : props.width || "120px"};
`;