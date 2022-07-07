import styled from 'styled-components';
import { Display2 } from 'components/atoms';

export const Marque = styled.div`
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  z-index: -100;

  span {
    font-size: ${props => props.theme.fontSize.marquee};
    padding: 0 10vw;
    color: transparent;
    -webkit-text-stroke: 2px ${props => props.theme.colors.secondary};
    opacity: .3;

    ${props => props.theme.is.lg}{
      font-size: calc(${props => props.theme.fontSize.display5} + ${props => props.theme.fontSize.display5} / 3);
    }
  }
`;

export const Inner = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 10s linear infinite;
  animation-play-state: running;

  @keyframes marquee {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
}
`;

export const Block = styled.div`
  ${props => props}
  margin-top: 80px;
  z-index: -200;
  background-color: transparent;
`;

export const TextContainer = styled.div`

  ${props => props.theme.is.xxxl}{
    margin: -110px 0 0 320px;
  }

  ${props => props.theme.is.xxl}{
    margin: -110px 0 0 240px;
  }

  ${props => props.theme.is.xl}{
    margin: -110px 0 0 120px;
  }

  ${props => props.theme.is.lg}{
    margin: -80px 0 0 32px;
  }

  ${props => props.theme.is.md}{
    margin: -64px 0 0;
  }
`;

export const Text = styled(Display2)`
  ${props => props.theme.is.md}{
    font-size: ${props => props.theme.fontSize.display};
    line-height: calc(${props => props.theme.fontSize.display} + 8px);
  }
`;