import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

interface IProps {}

const Navbar = (props: IProps) => {
  const [user] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  let displayName: string = user?.displayName || '';
  let photoURL: string = user?.photoURL || displayName[0];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  const [mobileMenuClasses, setMobileMenuClasses] = useState([
    'navbar-mobile-menu',
    'hide-menu',
  ]);

  function showHideMenu() {
    if (mobileMenuClasses.includes('hide-menu')) {
      setMobileMenuClasses(['navbar-mobile-menu']);
    } else {
      setMobileMenuClasses(['navbar-mobile-menu', 'hide-menu']);
    }
  }

  return (
    <div className={navbarClasses.join(' ')}>
      <div className='navbar-inner'>
        <div className='nav-brand'>
          <Link to='/'>Mynd</Link>
        </div>
        <div className='nav-item'>
          <Link to='/home'>Home</Link>
        </div>
        <div className='nav-item'>
          <Link to='/calendar'>Calendar</Link>
        </div>
        <div className='nav-item'>
          <Link to='/chat/'>Chat</Link>
        </div>
        <div className='nav-item'>
          <Link to='/news'>News</Link>
        </div>
        <div className='nav-user'>
          <Link to='/'>
            <Avatar src={photoURL} alt={displayName[0]} />
          </Link>
        </div>
      </div>
      <div className='navbar-mobile'>
        <div className='navbar-mobile-main'>
          <Link to='/'>Mynd</Link>
          <button onClick={() => showHideMenu()}>+</button>
        </div>
        <div className={mobileMenuClasses.join(' ')}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link to='/'>Chat</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/'>
                <Avatar src={photoURL} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
