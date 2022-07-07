import { Link } from 'components/atoms'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Container } from './styled'

const Index = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Link as="a" href="#history">{t("history")}</Link>
      <Link as="a" href="#clips">{t("clips")}</Link>
      <Link as="a" href="#discography">{t("discography")}</Link>
      <Link as="a" href="#merch">{t("merch")}</Link>
      <Link as="a" href="#contact">{t("contact")}</Link>
    </Container>
  )
}

export default Index
