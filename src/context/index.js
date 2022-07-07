import React from 'react';
import LangState from './lang/langstate';

const Ctx = ({ children }) => {
  return (
    <LangState>
      {children}
    </LangState>
  )
}

export default Ctx