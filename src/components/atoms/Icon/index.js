import styled from 'styled-components';
import { ReactComponent } from 'assets/icons/spotify.svg';

export default styled(ReactComponent)`
  width: ${props => props.size || "24px"};
  height: ${props => props.size || "24px"};
`;