import React from 'react';

import FAQSegment from './FAQ-segment';

interface IProps {

}

const FAQs = (props: IProps) => {

    return (
        <div className="faqs-container container">
            <h1>FAQs</h1>
            <FAQSegment />
            <FAQSegment />
            <FAQSegment />
        </div>
    )
}

export default FAQs;
