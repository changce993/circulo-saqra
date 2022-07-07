import React from 'react';
import { Container, Grid } from 'components/atoms';
import { Marquee, Card } from 'components/molecules';
import { ReactComponent as PACK_CHELAS } from 'assets/images/PACK_CHELAS.svg';
import { ReactComponent as PACK_INVIERNO } from 'assets/images/PACK_INVIERNO.svg';
import { ReactComponent as PACK_MASCARILLA } from 'assets/images/PACK_MASCARILLA.svg';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  const albums = [
    {
      image: PACK_CHELAS,
      title: "50 soles ",
      url: ""
    },{
      image: PACK_INVIERNO,
      title: "50 soles ",
      url: ""
    },{
      image: PACK_MASCARILLA,
      title: "50 soles ",
      url: ""
    },
  ];

  return (
    <>
      <Marquee id="discography" title={t("merchandise")}>{t("store")}</Marquee>
      <Container>
        <Grid maxWidth="1140px" margin="80px auto">
          {albums.map((album, idx) => (
            <Card key={idx} content={album}/>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Index
