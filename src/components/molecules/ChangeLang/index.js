import { Link } from 'components/atoms';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styled';
import langcontext from 'context/lang/langcontext';

const Index = () => {
  const { t } = useTranslation();
  const { handleChangeLang, lang } = useContext(langcontext);

  const langs = [
    { lang: "es", name: "spanish" },
    { lang: "en", name: "english" }
  ];

  return (
    <Container>
      {langs.map((l, i) => (
        <Link key={i} disable={lang !== l.lang} as="p" onClick={() => handleChangeLang(l.lang)}>
          {t(l.name)}
        </Link>
      ))}
    </Container>
  )
}

export default Index
