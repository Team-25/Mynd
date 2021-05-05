import './InterestBlock.scss';
import {useState} from 'react';


interface IProps {
    category: string,
    interests: Array<string>,
    colour: string
}


function InterestsBlock(props: IProps) {

    // For search results
    const [searchedInterests, updateSearchedInterests] = useState(props.interests);
    // For the ones they choose to select
    const [selectedInterests, updateSelectedInterests] = useState(['']);

    const interestStyle = { "backgroundColor": props.colour }

    const selected = { "border": "1px solid cyan" }

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
            if (props.interests[i].includes(event.target.value)) {
                y.push(props.interests[i])
            }
        }
        
        if (y.length !== 0) {
            updateSearchedInterests(y);
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
