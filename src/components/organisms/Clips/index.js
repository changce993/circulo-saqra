import React, { useRef, useState } from 'react';
import { Container }from 'components/atoms'
import { Marquee } from 'components/molecules'
import { IFrame, Arrows, AllVideosText, Line, AllVideos } from './styled';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow_right.svg';
import { useIntersectionObserver } from 'hooks';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const ref = useRef();
  const [ videoIdx, setVideoIdx ] = useState(0);
  const isIntersecting = useIntersectionObserver(ref);
  const { t } = useTranslation();

  const videos = [
    {
      video: "https://www.youtube.com/embed/t4GIRWl-KYg",
      name: "Premio y Castigo"
    },
    {
      video: "https://www.youtube.com/embed/BS-lRoF8NJI",
      name: "Fiesta del origen"
    },
    {
      video: "https://www.youtube.com/embed/PT0v7YvP_z4",
      name: "Atrápame"
    },
    {
      video: "https://www.youtube.com/embed/VoBPpCkfkVs",
      name: "Un break"
    },
  ];

  const handleNextVideo = () => {
    const idx = videoIdx === videos.length - 1 ? 0 : videoIdx;
    setVideoIdx(idx + 1);
  }

  const handlePrevVideo = () => {
    const idx = videoIdx === 0 ? videos.length : videoIdx;
    setVideoIdx(idx - 1);
  }

  return (
    <>
      <Marquee id="clips" title={t("clips")}>{videos[videoIdx].name}</Marquee>
      <Container width="fit-content">
        <Arrows>
          <ArrowLeft onClick={handlePrevVideo}/>
          <ArrowRight onClick={handleNextVideo}/>
        </Arrows>

        <IFrame
          src={`${videos[videoIdx].video}?controls=0`}
          title="MIW live"
        />
      </Container>
      
      <AllVideos ref={ref}>
        <AllVideosText
          as="a"
          href="https://www.youtube.com/channel/UC7R8z0d0LpfOjK2Q9b1qYVg"
        >
          {t("allVideos")}
        </AllVideosText>
        <Line isIntersecting={isIntersecting}/>
      </AllVideos>
    </>
  )
}

export default Index
