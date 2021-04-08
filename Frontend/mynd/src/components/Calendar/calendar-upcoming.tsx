import React from "react"
import CalendarEvent from "./calendar-event";
import './user-calendar.scss'

interface IProps {

}

interface IState {
}

class CalendarUpcoming extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
    }

    render() {
        return (
            <div className="calendar-upcoming-events">
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
