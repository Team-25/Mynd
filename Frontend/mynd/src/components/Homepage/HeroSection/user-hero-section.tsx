import React from 'react';
import Button from '@material-ui/core/Button';
import './HeroSection.scss';


interface IProps {
    name: string;
}

interface IState {
    selectedQuote: { [key: string]: string};
    hr: number;
}

class HeroSection extends React.Component<IProps> {
    state: IState = {
        selectedQuote: {text:'quote',author:'author'},
        hr: new Date().getHours(),
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
         .then((response) => response.json())
         .then((data) => {
            let randNum = Math.floor(Math.random()*data.length);
            this.setState({selectedQuote: data[randNum]});
        });
    }

    render() {
        return (
            <div className="hero-container">
                <div className="bg-text">
                    {(this.state.hr >= 18) ? <h1>Good Evening {this.props.name}</h1> : (this.state.hr >= 12) ? <h1>Good Afternoon {this.props.name}</h1> : <h1>Good Morning {this.props.name}</h1>}
                    <p> "{this.state.selectedQuote.text}" - {this.state.selectedQuote.author}</p>
                </div>
                <div className="bg-buttons">
                    <Button variant="contained" color="primary" size="large" className="h-btn">Jump in</Button>
                    <Button variant="contained" color="primary" size="large" className="h-btn">DMs</Button>
                </div>
            </div>
        )
    }
}

export default HeroSection;