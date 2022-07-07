import React, { useRef } from 'react';
import { Body, Box, Container, Display1, Grid, Logo } from 'components/atoms';
import { Marquee, Card } from 'components/molecules';
import { Content } from './styled';
import { ReactComponent as PeruvianTropifunk } from 'assets/images/peruviantropifunk.svg';
import { ReactComponent as HeyTomaPrueba } from 'assets/images/heytomaprueba.svg';
import { ReactComponent as Lavidaesunremix } from 'assets/images/lavidaesunremix.svg';
import { useParallaxPointer } from 'hooks';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const albums = [
    {
      image: PeruvianTropifunk,
      title: "Peruvian Tropifunk",
      url: ""
    },{
      image: HeyTomaPrueba,
      title: "Hey! Toma, prueba",
      url: ""
    },{
      image: Lavidaesunremix,
      title: "La vida es un remix",
      url: ""
    },
  ];

  const { setParallaxItem } = useParallaxPointer();
  const { t } = useTranslation();
  const box1 = useRef();
  const box2 = useRef();

  useEffect(() => {
    setParallaxItem([box1.current, box2.current]);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Marquee id="discography" title={t("discography")}>Spotify</Marquee>
      <Container>
        <Grid maxWidth="1140px" margin="80px auto">
          {albums.map((album, idx) => (
            <Card key={idx} content={album}/>
          ))}
        </Grid>

        <Content>
          <Display1 textAlign="center">{t("thisNewBeing")}</Display1>
          <Body textAlign="center" maxWidth="800px">{t("newBeignDesc")}</Body>

          <Logo
            width="360px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) scale(1.2)"
            zIndex="-1"
            opacity=".3"
          />

          <Box ref={box1} speed="-2" vertical bg="primary" top="0" right="200px" zIndex="-1"/>
          <Box ref={box2} speed="1" width="320px" height="120px" bg="secondary" bottom="-64px" left="200px" zIndex="-1"/>
        </Content>
      </Container>
    </>
  )
}

export default Index
