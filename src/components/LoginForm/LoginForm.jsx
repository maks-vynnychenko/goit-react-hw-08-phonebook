import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/operations';

import { Header } from '../commonStyle.styled';

import { Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };

  if (isLoggedIn) return <Navigate to="/contacts" />;
  return (
    <main>
      <Header>Login Into Your Account</Header>
      <form onSubmit={submitForm}>
        <FormControl marginBottom="10px">
          <FormLabel>Email address</FormLabel>
          <Input
            name="userEmail"
            type="email"
            required
            width="300px"
            placeholder="Enter your Email"
            variant="filled"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="userPassword"
            type="password"
            required
            minLength={7}
            width="300px"
            placeholder="Enter your Password"
            variant="filled"
          />
        </FormControl>

        {/* <button type="submit">Log in</button> */}
        <Button width="100px" type="submit" marginTop="20px" colorScheme="blue">
          Log In
        </Button>
      </form>
    </main>
  );
};

export default LoginForm;