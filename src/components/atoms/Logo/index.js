import styled from 'styled-components';
import logo from 'assets/brand/logo.png'

const Logo = styled.img`
  ${props => props}
  width: ${props => props.width || "80px"};
  cursor: pointer;
`;

Logo.defaultProps = {
  src: logo
};

export default Logo;
