import React from 'react';
import img from '../../../img/bg-1.jpg';


interface IProps {
    title: string;
    description: string;
}

const Banner = (props: IProps) => {

    return (
        <div className="homepage-banner-img">
            <img src={img} alt="homepage banner"/>
            <div className="homepage-banner-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Banner;
