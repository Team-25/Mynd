import { Grid } from "@material-ui/core";
import '../components/News/news.scss'
import React from "react"
import TwitterContainer from '../components/News/twitter-timeline'

interface IProps {
}

const NewsPage = (props: IProps) => {
    return (
        <div className="news-grid">
            <div className="news-header">
                <h1> News on Covid-19</h1>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TwitterContainer account="NHS" />
                </Grid>
                <Grid item xs={3}>                   
                    <TwitterContainer account="WHO" />
                </Grid>
                <Grid item xs={6}>
                <div style={{maxWidth:500, height: 300}}><iframe src="https://api-bridge.azurewebsites.net/conditions/?p=coronavirus-covid-19&aspect=name,overview_short,symptoms_short,symptoms_long,treatments_overview_short,other_treatments_long,self_care_long,prevention_short,causes_short&tab=3&uid=localhost:3000" title="NHS website - health a-z" style={{height: 500, width: 500}}></iframe></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewsPage;
