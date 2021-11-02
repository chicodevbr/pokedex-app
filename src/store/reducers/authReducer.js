import jwtDecode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token'),
  name: null,
  email: null,
  role: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
    case 'SIGN_IN':
    case 'SIGN_UP':
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        role: user.role,
        _id: user._id,
      };
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      return {
        token: null,
        name: null,
        email: null,
        role: null,
        _id: null,
      };

    default:
      return state;
  }
};

export default authReducer;
