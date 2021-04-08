import React from 'react';

import FAQSegment from './FAQ-segment';

interface IProps {

}

const FAQs = (props: IProps) => {

    const questions = [
        {
            "question": 'Question 1',
            "answer": 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
        },
        {
            "question": 'Question 2',
            "answer": 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
        },
        {
            "question": 'Question 3',
            "answer": 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
        }
    ];

    return (
        <div className="faqs-container container">
            <h1>FAQs</h1>
            <div className="question-container">
            {questions.map((q) => <FAQSegment question={q.question} answer={q.answer} />)}
            </div>
        </div>
    )
}

export default FAQs;
