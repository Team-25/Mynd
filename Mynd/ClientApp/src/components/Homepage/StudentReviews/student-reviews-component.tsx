import React from 'react';
import { Avatar, Card, Typography } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';

interface IProps {
    image: string;
    name: string;
    text: string;
}

const StudentReviewComponent: React.FC<IProps> = (props: IProps) => {

    return (
        <Card className="card_reviews_component">
            <CardActionArea>
                <Avatar alt="Remy Sharp" src={props.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default StudentReviewComponent;
