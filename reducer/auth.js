import { AUTH_REQUEST, AUTH_SUCCESS } from '../action/auth';
import Storage from '../service/storage';
import { JWT } from '../constant';
import Memory from '../service/memory';
import { AUTH_DATA } from '../constant';

const auth = (state = {}, action) => {
  switch (action.type) {
  case AUTH_SUCCESS:
    return {
      ...state,
      user: action.playload.user,
      jwt: action.playload[JWT]
    };
  default:
    return state;
  }
}

export default auth;