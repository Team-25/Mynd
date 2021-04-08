import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import React from "react"
import './user-calendar.scss'

interface IProps {
    time: string,
    title: string,
    speakers: string,
}

class CalendarEvent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Card className="calendar-event-card">
            <CardActionArea>
                <CardContent>
                <Typography variant="h6" component="h2">
                        {this.props.time}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Speaking by: {this.props.speakers}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        )
    }
}
export default CalendarEvent;
