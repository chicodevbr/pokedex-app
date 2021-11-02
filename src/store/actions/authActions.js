import axios from 'axios';
import { BASE_URL } from '../../api/PokesService';

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/pokemon/signup`, user)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'SIGN_UP',
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const signIn = (creds) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/pokemon/signin`, creds)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'SIGN_IN',
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token,
      });
    } else {
      return null;
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'SIGN_OUT',
    });
  };
};
