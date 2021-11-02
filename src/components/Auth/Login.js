import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../../store/actions/authActions';

import { Redirect } from 'react-router';

import Input from '../UI/Input';
import Button from '../UI/Button';

const Login = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: '',
      password: '',
    });
  };

  if (auth._id && auth.role === 'admin') return <Redirect to="/dashboard" />;

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login
        </h1>

        <form onSubmit={submitHandler}>
          <Input
            label="E-mail"
            type="email"
            id="E-mail"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            id="Password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <Button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
