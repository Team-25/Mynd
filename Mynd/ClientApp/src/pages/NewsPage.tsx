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
                </Grid>
            </Grid>
        </div>
    )
}

export default NewsPage;
