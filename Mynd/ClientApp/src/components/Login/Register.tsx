import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../extra/appSlice';
import GoogleIcon from '../../img/googleIcon.png';

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
      <RegisterInnerContainer>
        <h1>Mynd</h1>
        <h2>Register</h2>
        <form>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Full name"
          />
          <input
            type="text"
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
            placeholder="Profile picture URL"
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
          <Button className='button' type="submit" onClick={register}>Register</Button>
          <Button className='button' onClick={signUpGoogle}>
            <img src={GoogleIcon} />
            Google Register
          </Button>
          <Button className='button' href='/login'>
            Or Login
          </Button>
        </form>
      </RegisterInnerContainer>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  background-color: #2c2c2c;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const RegisterInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background: linear-gradient(to bottom, #66ffcc 0%, #99ff99 100%);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 255, 0, 1), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: grid;
  place-items: center;

  > h1 {
    color: #ed4f3a;
  }

  > h2 {
    color: black;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    > input {
      width: 35vw;
      height: 5vh;
      font-size: 20px;
      padding-left: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }

    > .button {
      width: 36vw;
      height: 5vh;
      font-size: medium;
      color: #fff;
      background-color: #26a8ff;
      border-radius: 5px;
      margin-bottom: 7px;

      :hover {
        background-color: white;
        transition: 0.2s;
        color: black;
        cursor: pointer;
      }

      img {
        object-fit: contain;
        height: 15px;
        margin-right: 5px;
      }
    }
  }
`;