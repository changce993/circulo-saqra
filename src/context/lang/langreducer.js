import { CHANGE_LANG } from 'types';

const userReducer = (state, action) => {
  switch(action.type){
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
};

export default userReducer;