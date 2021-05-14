import '../components/News/news.scss'
import React from "react"
import TwitterContainer from '../components/News/twitter-timeline'
import Spinner from 'react-spinkit';

interface IProps {

}

interface IState {
    loading: boolean,
    tips: { [key: string]: string}[],
    guidelines: { [key: string]: string}[],
    canonicallinks: { [key: string]: string}[],
}

class NewsPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        loading: true,
        tips: [],
        guidelines: [],
        canonicallinks: [],
    }

    async componentDidMount() {
        fetch("https://api.nhs.uk/conditions/coronavirus-covid-19?url=localhost:3000/news&modules=false")
        .then((response) => response.json())
        .then((data) => {
           this.setState({tips: data.hasPart});
           this.setState({guidelines: data.mainEntityOfPage[3].mainEntityOfPage});
           this.setState({loading: false});
           this.setState({canonicallinks: data.mainEntityOfPage[1].mainEntityOfPage});
           console.log(data)
       });
    }

    render() {
        return (
            <div>
                {this.state.loading || this.state.tips.length==0 ?  (
                    <div className='loading'>
                        <div className='loadingContents'>
                            <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none' />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="news-header">
                            <h1> News on Covid-19</h1>
                        </div>
                        <div className="news-grid">
                            <div> <h1> Tweets by NHS </h1> <TwitterContainer account="NHS" /> </div>
                            <div> <h1> Tweets by WHO </h1> <TwitterContainer account="WHO" /> </div>
                            <div>
                                <h1> Tips </h1>
                                <div className="NHS-container">
                                    {this.state.tips.map( 
                                        (data) => 
                                            
                                                <div className="NHS-item" dangerouslySetInnerHTML={{ __html: data.text }} />
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <h1> Links </h1>
                                <div className="NHS-container links">
                                    {this.state.canonicallinks.map( 
                                        (data) => 
                                            <a href={"https://www.nhs.uk/" + data.url}>
                                                <div className="NHS-item">
                                                    <header>
                                                        <h2>{data.headline}</h2>
                                                    </header>
                                                    <div className="NHS-text">
                                                        <p dangerouslySetInnerHTML={{ __html: data.text }} />
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    }
                                </div>
                                <h1> Other </h1>
                                <div className="NHS-container">
                                    {this.state.guidelines.map( 
                                        (data) => 
                                            <a href={data.url}>
                                                <div className="NHS-item">
                                                    <h2>{data.headline}</h2>
                                                </div>
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    
    }
}

export default NewsPage;
