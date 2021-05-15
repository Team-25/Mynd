import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

interface IProps {}

const Footer = (props: IProps) => {
  const [user] = useAuthState(auth);

  return (
    // mostly just used for checking if thing worked
    <footer>
      <div className='inner-footer'>
        <div className='footer-top'>
          <h1>Mynd</h1>
          <span>General</span>
          <span>Features</span>
          <span>User</span>
        </div>
        <div className='footer-bottom'>
          <div className='footer-brand'></div>
          <div className='footer-section'>
            <a href='/'>
              <p>Landing Page</p>
            </a>
            <a href='/home'>
              <p>Homepage</p>
            </a>
            <a href='/news'>
              <p>News</p>
            </a>
          </div>
          <div className='footer-section'>
            <a href='/videocalling'>
              <p>Video Calling</p>
            </a>
            <a href='/calendar'>
              <p>Calendar</p>
            </a>
            <a href='/chat'>
              <p>My Chats</p>
            </a>
          </div>
          <div className='footer-section'>
            {user ? (
              <p onClick={() => auth.signOut()}>Sign Out</p>
            ) : 
            (
              <p>Logged Out</p>
            )}
            <a href='/profile'>
              <p>My Profile</p>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>Made by Mynd</div>
    </footer>
  );
};

export default Footer;
