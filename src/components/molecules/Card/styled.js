import { Display2 } from 'components/atoms';
import styled from 'styled-components';

export const Text = styled(Display2)`
  position: absolute;
  font-size: ${props => props.theme.fontSize.title};
  line-height: ${props => props.theme.fontSize.title};
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  transition: ${props => props.theme.transition.default};
  opacity: 0;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  transition: ${props => props.theme.transition.default};
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1/1;
  transition: ${props => props.theme.transition.default};

  :hover {
    transform: scale(.95);

    ${Image}{
      transform: scale(1.1);
      filter: blur(4px) brightness(60%);
    }

    ${Text}{
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;