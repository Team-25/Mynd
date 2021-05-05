import './InterestBlock.scss';
import {useState} from 'react';


interface IProps {
    category: string,
    interests: Array<string>
}


function InterestsBlock(props: IProps) {

    for (let i = 0; i < props.interests.length; i++) {
        props.interests[i] = props.interests[i].charAt(0).toUpperCase() + props.interests[i].slice(1);
    }

    // For search results
    const [searchedInterests, updateSearchedInterests] = useState(props.interests);
    // For the ones they choose to select
    const [selectedInterests, updateSelectedInterests] = useState(['']);

    const interestStyle = { "backgroundColor": "rgb(124, 124, 124)" }

    const selected = { "backgroundColor": "rgb(60, 171, 175)" }

    // Add/Remove an interest from the selected list 
    const select = (interest: string) => {
        let e : Array<string> = new Array();
        for (let i = 0; i < selectedInterests.length; i++) {
            e.push(selectedInterests[i])
        }
        if (!selectedInterests.includes(interest)) {
            e.push(interest);
        } else {
            e.splice(e.indexOf(interest), 1);
        }

        // should post to server to update their interests

        updateSelectedInterests(e);
    }

    const searchInterests = (event: any) => {
        let y : Array<string> = new Array<string>();
        for (let i = 0; i < props.interests.length; i++) {
            if (props.interests[i].toLowerCase().includes(event.target.value)) {
                y.push(props.interests[i])
            }
        }
        
        if (y.length !== 0) {
            updateSearchedInterests(y);
        } else {
            updateSearchedInterests([]);
        }
    }
    

    return (
        <div className="interest-block">
            <input onChange={searchInterests} type="text" style={interestStyle}/>
            <ul>
                {searchedInterests.map((interest) => 
                    <li key={interest} style={selectedInterests.includes(interest) ? selected : {}} onClick={() => select(interest)}>{interest}</li>
                )}
            </ul>
        </div>
    );
}

export default InterestsBlock;
