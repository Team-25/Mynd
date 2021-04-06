import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UserTestimonial from './UserTestimonial';


interface IProps {
    image: ImageBitmap;
}

const DescriptionBlock = (props: IProps) => {

    return (
        <Container maxWidth="md" className="content">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <h1>What is Mynd?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, luctus in lobortis eget, ullamcorper tristique ante. Duis sit amet elit maximus, fringilla diam vel, pretium ex. Morbi elit erat, volutpat quis nibh sit amet, egestas interdum nunc. Aliquam justo dui, bibendum non risus non, tincidunt finibus mauris.</p>
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                        <li>Point 4</li>
                    </ul>
                </Grid>
                
                <Grid item xs={4}>
                    <UserTestimonial 
                        name="John Doe"
                        title="I like it"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a felis non quam tincidunt pulvinar. Aliquam sed pulvinar nisi, quis pellentesque diam. "
                        image={props.image}   
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DescriptionBlock;
