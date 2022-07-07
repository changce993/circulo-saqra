import { useReducer } from 'react';
import langcontext from './langcontext';
import langreducer from './langreducer';

import { CHANGE_LANG } from 'types';

const LangState = ({ children }) => {

  const initialState = {
    lang: "en"
  };

  const [ state, dispatch ] = useReducer(langreducer, initialState);

  const handleChangeLang = lang => {
    dispatch({
      type: CHANGE_LANG,
      payload: lang
    });
  };

  const { lang } = state;

  return (
    <langcontext.Provider value={{
      lang,
      handleChangeLang
    }}>
      {children}
    </langcontext.Provider>
  )
}

export default LangState