import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'App';
import MyContext from 'context';
import 'i18n';

render(
  <StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </StrictMode>,
  document.getElementById('root')
);
