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


    const [isOpen, setIsOpen] = useState(false);

    const clearInterests = () => {
        updateSelectedInterests([]);
    }

    const openClose = () => {
        setIsOpen(!isOpen)
    }
    

    return (
        <div className="interest-block">
            <h2>{props.category}</h2>
            <div className="interests" style={isOpen ? {"display": "none"} : {"display": "block"}}>
                {selectedInterests.length === 1 ? <p>No interests selected</p> :
                    <p>
                        {selectedInterests.map((interest) => 
                            <span>{interest} </span>
                        )}
                    </p>
                }
                <button className="edit-button" onClick={openClose}>Edit</button>
            </div>
            <div className="interest-input-box" style={isOpen ? {"display": "block"} : {"display": "none"}}>
                Pick 5
                <input className="interest-input" onChange={searchInterests} type="text" style={interestStyle}/>
                <ul>
                    {searchedInterests.map((interest) => 
                        <li key={interest} style={selectedInterests.includes(interest) ? selected : {}} onClick={() => select(interest)}> {interest}</li>
                    )}
                </ul>
                <button className="clear-interests" onClick={clearInterests}>Clear</button>
                <button className="edit-button" onClick={openClose}>Close</button>
            </div>
        </div>
    );
}

export default InterestsBlock;
