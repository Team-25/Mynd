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
          <Link to='/'>
            <h1>Mynd</h1>
          </Link>
          <span>General</span>
          <span>Features</span>
          <span>User</span>
        </div>
        <div className='footer-bottom'>
          <div className='footer-brand'></div>
          <div className='footer-section'>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
          </div>
          <div className='footer-section'>
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
          </div>
          <div className='footer-section'>
            {user ? (
              <button onClick={() => auth.signOut()}>Sign Out</button>
            ) : (
              <p>Logged Out</p>
            )}
            <Link to='/chat'>
              <p>My Chats</p>
            </Link>
            <p>Recent</p>
            <p>Link 4</p>
          </div>
        </div>
      </div>
      <div className='copyright'>Made by Mynd</div>
    </footer>
  );
};

export default Footer;
