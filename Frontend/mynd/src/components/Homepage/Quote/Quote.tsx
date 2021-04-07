import React from 'react';

interface IProps {
    quote: string;
    author: string;
}

const Quote = (props: IProps) => {

    return (
        <div className="quote">
            "{props.quote}" - <span>{props.author}</span>
        </div>
    )
}

export default Quote;
