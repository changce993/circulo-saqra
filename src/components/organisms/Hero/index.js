import { Body, CirculoSaqra, Display5, Div } from 'components/atoms'
import { RRSS } from 'components/molecules';
import { useTranslation } from 'react-i18next';
import { Content } from './styled';

const Index = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <Display5 width="fit-content">
        <Display5 color="primary" display="inline-block">{t("music")}</Display5> {t("to")}
        <div>
          <Div bg="secondary">{t("vibrateBeautiful")}.</Div>
        </div>
      </Display5>
      <Body>{t("hero")}</Body>
      <RRSS/>
      <CirculoSaqra/>
    </Content>
  )
}

export default Index
