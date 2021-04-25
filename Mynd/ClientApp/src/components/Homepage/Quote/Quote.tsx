import React from 'react';

interface IProps {
    quote: string;
    author: string;
}

const Quote = (props: IProps) => {

    return (
        <div className="quote container">
            <div className="content">
                "{props.quote}" - <span>{props.author}</span>
            </div>
        </div>
    )
}

export default Quote;
