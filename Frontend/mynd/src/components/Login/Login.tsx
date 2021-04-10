import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../../firebase';

interface IProps {
}

const Login = (props: IProps) => {
  const signIn = (e: any) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  }

  return (
    <LoginContainer>
      <h1>Test</h1>
      <Button onClick={signIn}>
        Google Sign In
      </Button>
    </LoginContainer>
  );
}

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