import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../extra/appSlice';

interface IProps {
}

const Register = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = (e: any) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name");
    };

    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user?.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user?.email,
              uid: userAuth.user?.uid,
              displayName: name,
              photoURL: profilePic,
            }));
          });
      }).catch(error => alert(error));
  };

  const signUpGoogle = (e: any) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
        />
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
        <Button type="submit" onClick={register}>Register</Button>
      </form>
      <Button onClick={signUpGoogle}>
        Google Sign Up
      </Button>
      <Button href='/login'>
        Or Login
      </Button>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  display: grid;
  place-items: center;

  > h1 {
    color: black;
  }
`;