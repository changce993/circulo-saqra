import styled from 'styled-components';
import { Div } from 'components/atoms'

export const Img = styled.img`
  max-width: 320px;
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  transition: ${props => props.theme.transition.default};

  ${props => props.theme.is.md}{
    aspect-ratio: 1/1;
  }
`;

export const Content = styled(Div)`
  display: flex;
  gap: 80px;
  max-width: 1100px;
  margin: 80px auto;

  ${props => props.theme.is.lg}{
    gap: 48px;
  }

  ${props => props.theme.is.md}{
    flex-direction: column;
  }
`;

export const ImageContainer = styled(Div)`
  position: relative;
  min-width: 280px;
  width: 100%;
  height: 100%;

  ${props => props.theme.is.md}{
    width: fit-content;
    margin: 0 auto;
  }
`;

export const TextContent = styled(Div)`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;

export const Member = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  transition: ${props => props.theme.transition.default};

  :hover {
    transform: scale(1.3);
  }
`;

export const Members = styled(Div)`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
  margin: 48px auto;
`;