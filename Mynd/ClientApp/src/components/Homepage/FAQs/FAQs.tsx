import React from 'react';

import FAQSegment from './FAQ-segment';

interface IProps {

}

const FAQs = (props: IProps) => {

    const questions = [
        {
            "question": 'How do I get matched to chat with peers?',
            "answer": 'Simply fill in any interests you have, and describe how you are feeling, on your profile page. Then when you go to the chat page you can generate your matches to chat with!'
        },
        {
            "question": 'How do I talk to mental health professionals?',
            "answer": 'Head to the video chat page, and once you have logged in you will be able to choose from our list of qualified mental health professionals to talk to, either just by voice, or with video too.'
        },
        {
            "question": 'How do I log events on the calendar?',
            "answer": 'On our calendar page, click the button to add an event. Then once you have filled in the event details, you will be able see your custom events for each day you select on the calendar!'
        }
    ];

    return (
        <div className="faqs-container container">
            <div className="content">
                <h1>FAQs</h1>
                <div className="question-container">
                    {questions.map((q) => <FAQSegment question={q.question} answer={q.answer} />)}
                </div>
            </div>
        </div>
    )
}

export default FAQs;
