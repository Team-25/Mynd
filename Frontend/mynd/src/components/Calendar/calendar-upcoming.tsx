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
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex, James, Catherine" time="9:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="10:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Sam" time="11:30"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Sam, Alex, Harvey" time="12:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}
export default CalendarUpcoming;
