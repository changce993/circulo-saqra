import React, { useRef, useEffect, useState } from 'react';
import { Container, Body, Box } from 'components/atoms';
import { Marquee } from 'components/molecules';
import { useParallaxPointer } from 'hooks';
import { Img, Content, ImageContainer, TextContent, Member, Members } from './styled';
import { Fade } from 'components/motion';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const imageRef = useRef()
  const cube1 = useRef()
  const cube2 = useRef()
  const { setParallaxItem } = useParallaxPointer();
  const { t } = useTranslation();
  useEffect(() => {
    setParallaxItem([imageRef.current, cube1.current, cube2.current]);
    // eslint-disable-next-line
  }, []);
  const [ image, setImage ] = useState(0);
  const images = [
    "https://images.pexels.com/photos/9107512/pexels-photo-9107512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9989505/pexels-photo-9989505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9777471/pexels-photo-9777471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9991034/pexels-photo-9991034.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/9634196/pexels-photo-9634196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ]
  
  // setInterval(() => {
  //   image === images.length - 1 ? setImage(0) : setImage(image + 1);
  // }, 5000);

  return (
    <>
      <Marquee id="history" title={t("history")}>{t("circleFormed")}</Marquee>
      <Container>
        <Content>
          <ImageContainer>
            <Img src={images[image]} ref={imageRef} speed="1.5"/>
            <Box bg="primary" top="48px" left="-12px" ref={cube1} speed="3"/>
            <Box vertical bg="secondary" bottom="0" right="12px" ref={cube2} speed="-1"/>
          </ImageContainer>

          <TextContent>
            <Fade delay=".15s">
              <Body>{t("desc1")}</Body>
            </Fade>

            <Fade delay=".3s">
              <Body>{t("desc2")}</Body>
            </Fade>

            <Fade delay=".45s">
              <Body>{t("desc3")}</Body>
            </Fade>

            <Fade delay=".6s">
              <Body>{t("desc4")}</Body>
            </Fade>
          </TextContent>
        </Content>

        <Members>
          {images.map((img, idx) => <Member src={img} key={idx}/>)}
        </Members>
      </Container>
    </>
  )
}

export default Index
