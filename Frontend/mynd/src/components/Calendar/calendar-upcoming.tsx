import React from "react"
import { format} from 'date-fns'
import CalendarEvent from "./calendar-event";
import './user-calendar.scss'

interface IProps {

}

interface IState {
    currentDate: Date,
}

class CalendarUpcoming extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        currentDate: new Date(),
    }

    render() {
        return (
            <div className="calendar-upcoming-events">
                <h2>{format(this.state.currentDate,'EEEE d MMMM yyyy')}</h2>
                <h1>Your Events Today:</h1>
                <div className="calender-events-list">
                    <ul>
                        {/* TODO MAP OVER SOME QUERY OF EVENTS OF CURRENT DAY */}
                        {/* TODO MAP OVER SOME QUERY OF EVENTS OF SELECTED DAY */}
                        {[{
                        "title": "Some kinda speaking event",
                        "speakers": "Alex, Sam",
                        "time": "9:15",
                        }, {
                        "title": "Some kinda speaking event",
                        "speakers": "Alex",
                        "time": "10:15",
                        }, {
                        "title": "This is just dummy data lmao",
                        "speakers": "Alex, Harvey",
                        "time": "19:15",
                        }, {
                        "title": "hiya",
                        "speakers": "Bob",
                        "time": "21:15",
                        }, {
                        "title": "This is gettin late",
                        "speakers": "Bob",
                        "time": "23:15",
                        }, {
                        "title": "I just want scrolling",
                        "speakers": "John",
                        "time": "23:45",
                        }, {
                        "title": "MORE SCROLL!!!",
                        "speakers": "James",
                        "time": "23:50",
                        }].map(
                            (data) => 
                            <li className="calendar-events-items"><CalendarEvent title={data.title} speakers={data.speakers} time={data.time}/></li>
                        )}
                    </ul>
                </div>
            </div>
            
        )
    }
}
export default CalendarUpcoming;
