import { Avatar, Button, Paper, TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import './profile.scss';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import InterestBlock from './Interests/InterestBlock';
import Algo from './algo';

const useStyles = makeStyles((theme) => ({
  input: {
    background: 'rgb(232, 241, 250)',
  },
}));

interface IProps {}

function ProfilePage(props: IProps) {
  const [user] = useAuthState(auth);
  let displayChar: string = user?.displayName?.charAt(0)!;
  let photoURL: string = user?.photoURL!;
  let displayName: string = user?.displayName?.split(' ')[0] || '';
  let displayNames: string[] = user?.displayName?.split(' ')!;
  const classes = useStyles();

  const [feelings, setFeelings] = useState<string>('');

  const handleSave = () => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!feelings) {
      return false;
    }
    db.collection('user-data')
      .doc(user?.uid)
      .collection('User Feelings status')
      .add({
        feelings: feelings,
        date: new Date().toString(),
      });
  };

  return (
    <div>
      <div className='content'>
        <div className='user-details'>
          <div className='sec1'>
            <img src={photoURL} alt={displayChar} />
            <ul>
              <li>User Details</li>
              <li>
                Forename: <span>{displayNames[0]}</span>
              </li>
              <li>
                Surname: <span>{displayNames[1]}</span>
              </li>
              <li>
                Username: <span>{user?.displayName}</span>
              </li>
              <li>
                Password: <span>********</span>
              </li>
              <li>
                Email: <span>{user?.email}</span>
              </li>
            </ul>
          </div>
          <div className='sec2'>
            <div className='upper'>
              <h2>{displayName}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </p>
            </div>
            <Algo />
            <InterestBlock
              type='interests'
              category='What are you interested in?'
              interests={[
                'swimming',
                'running',
                'archery',
                'javelin',
                'golf',
                'hurdles',
                'games',
                'movies',
                'animation',
                'sports',
                'basketball',
                'football',
                'comedy',
                'science',
                'maths',
                'youtube',
                'twitch',
                'coffee',
                'tea',
                'soda',
                'food',
                'flying',
                'writing',
              ]}
            />
            <InterestBlock
              type='feelings'
              category='How are you feeling?'
              interests={[
                'positive',
                'happy',
                'sad',
                'overwhelmed',
                'anxious',
                'stressed',
                'alright',
                'excited',
                'ready',
                'scared',
                'desperate',
                'annoyed',
                'determined',
                'creative',
                'healthy',
                'pessimistic',
                'optimistic',
                'charmed',
                'embarassed',
                'mournful',
                'shy',
                'tense',
                'frustrated',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
