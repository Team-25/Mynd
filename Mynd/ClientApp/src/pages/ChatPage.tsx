import { Grid } from '@material-ui/core';
import React from 'react';
import Chat from '../components/Chat/chat';
import '../components/Chat/chat.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

interface IProps {}

const ChatPage = (props: IProps) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/chat/:roomId'>
            <Chat />
          </Route>
          <Route path='/chat/'>
            <Redirect to='/chat/home' />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default ChatPage;
