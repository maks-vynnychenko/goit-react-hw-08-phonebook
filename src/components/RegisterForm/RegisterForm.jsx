import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/operations';

import { Header } from '../commonStyle.styled';

import { Button } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      registerUser({
        name: form.elements.userName.value,
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) return <Navigate to="/contacts" />;
  return (
    <main>
      <Header>Register Your Account</Header>

      <form onSubmit={submitForm}>
        <FormControl marginBottom="10px">
          <FormLabel>Username</FormLabel>
          <Input
            name="userName"
            type="text"
            required
            width="300px"
            placeholder="Enter your Name"
            variant="filled"
          />
        </FormControl>
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

        <Button width="100px" type="submit" marginTop="20px" colorScheme="blue">
          Log In
        </Button>
      </form>
    </main>
  );
};

export default RegisterForm;