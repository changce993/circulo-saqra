import { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Globalstyles, theme } from 'theme';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next'
import Routes from 'routes';
import langcontext from 'context/lang/langcontext';

const App = () => {
  const { i18n } = useTranslation();
  const { lang } = useContext(langcontext);

  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  
  useEffect(() => {
    i18n.changeLanguage(lang)
    // eslint-disable-next-line
  }, [lang]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <Globalstyles/>
        <Routes/>
      </ThemeProvider>
    </Router>
  )
};

export default App;
