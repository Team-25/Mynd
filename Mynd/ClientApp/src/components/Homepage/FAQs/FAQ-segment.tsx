import { Avatar } from '@material-ui/core';
import React from 'react';


/*==== TODO: NEED TO ADD IMG TO PROPS ====*/

interface IProps {
    question: string;
    answer: string;
}

const FAQSegment = (props: IProps) => {

    return (
        <div className="FAQSegment-container">
            <div className="top-layer">
                <Avatar className="FAQ-image" src="https://st4.depositphotos.com/27941032/30853/v/950/depositphotos_308538152-stock-illustration-target-minimal-thin-line-web.jpg" alt="test"/>
                <h2>{props.question}</h2>
            </div>
            <p>{props.answer}</p>
            <div className="vl"></div>
        </div>
    )
}

export default FAQSegment;
