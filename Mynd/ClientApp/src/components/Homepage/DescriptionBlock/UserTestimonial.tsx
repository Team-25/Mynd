import React from 'react';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';


interface IProps {
    name: string;
    title: string;
    text: string;
    image: ImageBitmap;
}

const UserTestimonial = (props: IProps) => {

    return (
        <div className="user-testimonial">
            <div className="user-testimonial-content">
                <Avatar src={String(props.image)} alt={props.name} className="user-image"/>
                <h2>{props.title}</h2>
                <div className="user-testimonial-text">
                    {props.text}
                </div>
            </div>
            <div className="user-testimonial-name">
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default UserTestimonial;
