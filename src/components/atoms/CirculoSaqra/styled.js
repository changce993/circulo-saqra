import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 140px;
  right: -480px;
  z-index: -1;

  ${props => props.theme.is.md}{
    position: relative;
    opacity: .3;
    top: -160px;
    right: 80px;
  }

  ${props => props.theme.is.sm}{
    position: relative;
    opacity: .3;
    top: -160px;
    left: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleDecorator = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: rotate3000 500s linear infinite;

  @keyframes rotate3000 {
    100% {
      transform: rotate(-3000deg);
    }
  }
`;

export const SaqraImage = styled.img`
  transform: scale(.3);
`;