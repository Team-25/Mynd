import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function News() {
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
