import { Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import React from "react"

interface IProps {
    time: Date,
    title: string,
    description: string,
}

class CalendarEvent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div className="calendar-event-card">
                <CardActionArea>
                    <CardContent>
                    <Typography variant="h6" component="h2">
                            {this.props.time.getHours()}:{(this.props.time.getMinutes()<10?'0':'') + this.props.time.getMinutes()}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography variant="body2"component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </div>
        )
    }
}
export default CalendarEvent;
