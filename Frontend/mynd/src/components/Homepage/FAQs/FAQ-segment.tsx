import { Avatar } from '@material-ui/core';
import React from 'react';


interface IProps {

}

const FAQSegment = (props: IProps) => {

    return (
        <div className="FAQSegment-container">
            <div className="top-layer">
                <Avatar className="FAQ-image" src="https://st4.depositphotos.com/27941032/30853/v/950/depositphotos_308538152-stock-illustration-target-minimal-thin-line-web.jpg" alt="test"/>
                <h2>Incredible Question</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
        </div>
    )
}

export default FAQSegment;
