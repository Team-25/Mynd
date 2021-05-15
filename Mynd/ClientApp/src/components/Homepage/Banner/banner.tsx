import React from 'react';
import img from '../../../img/test.png'; // HAving an issue moving this to be a prop
import { db, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {
  title: string;
  description: string;
}

const Banner = (props: IProps) => {
  const [user] = useAuthState(auth);
  return (
    <div className='banner'>
      <div className='homepage-banner-img'>
        <div className='homepage-banner-text'>
          <h1>
            <span>Talking</span> to others is the best form of{' '}
            <span>EPICNESS</span>
          </h1>
          <p>{props.description}</p>
          {user ? 
            <></> 
            : 
            <>
              <a href='/register'>Sign Up!</a>
              <a href='/login'>Or Log In!</a>
            </>
          }
          <a href='#about'>About Mynd</a>
        </div>
        <img src={img} alt='test' />
      </div>
    </div>
  );
};

export default Banner;
