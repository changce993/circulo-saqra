import { Display2 } from 'components/atoms';
import styled from 'styled-components';

export const IFrame = styled.iframe`
  ${props => props}
  max-width: 100%;
  width: 1140px;
  aspect-ratio: 5/3;
  outline: none;
  border: none;
  margin: 80px auto;
  display: block;
  transition: ${props => props.theme.transition.default};

  ${props => props.theme.is.lg}{
    width: 900px;
  }

  ${props => props.theme.is.md}{
    width: 600px;
  }

  ${props => props.theme.is.sm}{
    width: 450px;
  }

  ${props => props.theme.is.xs}{
    width: 100%;
  }
`;

IFrame.defaultProps = {
  frameborder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: true
};

export const Arrows = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  top: -80px;
  right: 48px;
  margin: 0;

  ${props => props.theme.is.xxl}{
    top: 0;
  }

  ${props => props.theme.is.lg}{
    position: relative;
    margin: 48px 48px -48px;
    width: fit-content;
  }

  svg {
    opacity: .5;
    cursor: pointer;
    transition: ${props => props.theme.transition.default};

    :hover {
      opacity: 1;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 36px;
  z-index: -1;
  left: ${props => props.isIntersecting ? "25%" : "50%"};
  height: 4px;
  width: ${props => props.isIntersecting ? "50%" : 0};
  background-color: ${props => props.theme.colors.primary};
  transition: ${props => props.theme.transition.default} .25s;
  opacity: ${props => props.isIntersecting ? 1 : .25};
  border-radius: 16px;
  box-shadow: 0 0 16px ${props => props.theme.colors.primary};
`;

export const AllVideosText = styled(Display2)`
  transition: ${props => props.theme.transition.default};
  display: block;
  text-decoration: none;
  margin: 0 auto;
  width: fit-content;

  :hover {
    text-shadow: 0 0 32px rgba(255,255,255,.75);
  }

  ${props => props.theme.is.md}{
    font-size: ${props => props.theme.fontSize.display};
    line-height: calc(${props => props.theme.fontSize.display} + 8px);
  }

  ${props => props.theme.is.sm}{
    font-size: ${props => props.theme.fontSize.title};
    line-height: calc(${props => props.theme.fontSize.title} + 8px);
  }
`;

export const AllVideos = styled.div`
  position: relative;
`;