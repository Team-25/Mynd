import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth, db } from '../../firebase';
import { enterChat } from '../../extra/appSlice';
import { Link } from 'react-router-dom';

function News() {
  const [user] = useAuthState(auth);
  const [cards, setCards] = useState([]);

  const endpoint =
    'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate"}';

  const GetInfo = async (url: string) => {
    const temp = await fetch(url).then((res) => res.json());

    console.log(temp.data);
    setCards(temp.data);
  };

  useEffect(() => {
    GetInfo(endpoint);
  }, []);

  return (
    <NewsContainer>
      <h1>Test</h1>
    </NewsContainer>
  );
}

export default News;

const NewsContainer = styled.div``;
