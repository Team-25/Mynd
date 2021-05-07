import { Grid } from '@material-ui/core';
import '../components/News/news.scss';
import React from 'react';
import TwitterContainer from '../components/News/twitter-timeline';

interface IProps {}

const NewsPage = (props: IProps) => {
  return (
    <>
      <div className='news-header'>
        <h1>News on Covid-19</h1>
      </div>
      <div className='news-grid'>
        <TwitterContainer account='NHS' />
        <TwitterContainer account='WHO' />
        <div className='NHS-widget-container'>
          <iframe
            src='https://api-bridge.azurewebsites.net/conditions/?p=coronavirus-covid-19&aspect=name,overview_short,symptoms_short,symptoms_long,treatments_overview_short,other_treatments_long,self_care_long,prevention_short,causes_short&tab=3&uid=localhost:3000'
            title='NHS website - health a-z'
            className='NHS-widget'
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
