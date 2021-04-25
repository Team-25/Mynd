import React from 'react';

import Grid from '@material-ui/core/Grid';
import UserTestimonial from './UserTestimonial';


interface IProps {
    image: ImageBitmap;
}

const DescriptionBlock = (props: IProps) => {

    return (
            <div className="container">
                <div className="content"> 
                    <div className="homepage-description">
                        <h1>What is Mynd?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, luctus in lobortis eget, ullamcorper tristique ante. Duis sit amet elit maximus, fringilla diam vel, pretium ex. Morbi elit erat, volutpat quis nibh sit amet, egestas interdum nunc. Aliquam justo dui, bibendum non risus non, tincidunt finibus mauris.</p>
                        <hr />
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                            <li>Aliquam tincidunt mauris eu risus.</li>
                            <li>Vestibulum auctor dapibus neque.</li>
                            <li>Nunc dignissim risus id metus.</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default DescriptionBlock;
