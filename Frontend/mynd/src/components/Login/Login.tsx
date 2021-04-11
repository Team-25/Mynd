import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../extra/appSlice';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';

interface IProps {
}

const Login = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loginToApp = (e: any) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user?.email,
          uid: userAuth.user?.uid,
          displayName: userAuth.user?.displayName,
          photoURL: userAuth.user?.photoURL,
        }));
      })
      .catch(error => alert(error));
  };

  const signInGoogle = (e: any) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <LoginContainer>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <Button onClick={signInGoogle}>
        Google Sign In
      </Button>
      <Button href='/register'>
        Or Register
      </Button>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  display: grid;
  place-items: center;

  > h1 {
    color: black;
  }
`;