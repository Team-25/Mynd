import './InterestBlock.scss';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';

interface IProps {
  category: string;
  type: string;
  interests: Array<string>;
}

function InterestsBlock(props: IProps) {
  const [user] = useAuthState(auth);
  for (let i = 0; i < props.interests.length; i++) {
    props.interests[i] =
      props.interests[i].charAt(0).toUpperCase() + props.interests[i].slice(1);
  }

  // For search results
  const [searchedInterests, updateSearchedInterests] = useState(
    props.interests
  );
  // For the ones they choose to select
  const [selectedInterests, updateSelectedInterests] = useState(['']);

  const interestStyle = { backgroundColor: 'rgb(70, 70, 70)' };

  const selected = { backgroundColor: 'rgb(0, 204, 255)' };

  // Add/Remove an interest from the selected list
  const select = (interest: string) => {
    let e: Array<string> = new Array();
    console.log(e);
    for (let i = 0; i < selectedInterests.length; i++) {
      e.push(selectedInterests[i]);
    }
    if (!selectedInterests.includes(interest)) {
      e.push(interest);
    } else {
      e.splice(e.indexOf(interest), 1);
    }

    // should post to server to update their interests

    updateSelectedInterests(e);
  };

  const searchInterests = (event: any) => {
    let y: Array<string> = new Array<string>();
    for (let i = 0; i < props.interests.length; i++) {
      if (props.interests[i].toLowerCase().includes(event.target.value)) {
        y.push(props.interests[i]);
      }
    }

    if (y.length !== 0) {
      updateSearchedInterests(y);
    } else {
      updateSearchedInterests([]);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const clearInterests = () => {
    updateSelectedInterests([]);
  };

  const openClose = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (selectedInterests.includes('')) {
      selectedInterests.splice(0, 1);
    }
    if (selectedInterests.length == 5) {
      if (props.type == 'interests') {
        db.collection('user-data').doc(user?.uid).collection('interests').add({
          interests: selectedInterests,
          timestamp: new Date().toString(),
        });
      } else if (props.type == 'feelings') {
        db.collection('user-data').doc(user?.uid).collection('feelings').add({
          feelings: selectedInterests,
          timestamp: new Date().toString(),
        });
      }
    } else {
      alert('Select five!');
    }
  };

  return (
    <div className='interest-block'>
      <h2>{props.category}</h2>
      <div
        className='interests'
        style={isOpen ? { display: 'none' } : { display: 'block' }}
      >
        {selectedInterests.length === 1 ? (
          <p>No interests selected</p>
        ) : (
          <p>
            {selectedInterests.map((interest) => (
              <span>{interest} </span>
            ))}
          </p>
        )}
        <button className='edit-button' onClick={openClose}>
          Edit
        </button>
      </div>
      <div
        className='interest-input-box'
        style={isOpen ? { display: 'block' } : { display: 'none' }}
      >
        <p>Pick 5</p>
        <input
          className='interest-input'
          onChange={searchInterests}
          type='text'
          style={interestStyle}
        />
        <ul>
          {searchedInterests.map((interest) => (
            <li
              key={interest}
              style={selectedInterests.includes(interest) ? selected : {}}
              onClick={() => select(interest)}
            >
              {' '}
              {interest}
            </li>
          ))}
        </ul>
        <button className='clear-interests' onClick={clearInterests}>
          Clear
        </button>
        <button className='edit-button' onClick={openClose}>
          Close
        </button>
      </div>
      <button className='submit-button' onClick={handleClick}>
        Submit {props.type}
      </button>
    </div>
  );
}

export default InterestsBlock;
