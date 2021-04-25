import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './InterestsBlock.scss';


interface IProps {

}

const InterestsBlock = (props: IProps) => {

    const test = [
        { title: 'test', data: 'yep'}
    ]


    return (
        <div className="interests-container">
            <input className="category-input" type="text" />
        </div>
    );
}


export default InterestsBlock;