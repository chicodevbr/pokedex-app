import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../store/actions/authActions';

import Input from '../UI/Input';
import Button from '../UI/Button';
import { Redirect } from 'react-router';

const SignUp = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: '',
      email: '',
      password: '',
      role: 'admin',
    });
  };

  if (auth._id) return <Redirect to="/" />;

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            id="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Input
            label="E-mail"
            type="email"
            id="E-mail"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            id="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
