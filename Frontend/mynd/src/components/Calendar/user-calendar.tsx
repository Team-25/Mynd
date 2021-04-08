import React from "react"
import { format, startOfMonth, startOfWeek, isBefore, endOfWeek, add , endOfMonth, isSameMonth, isSameDay} from 'date-fns'
import './user-calendar.scss'
import CalendarEvent from "./calendar-event";

interface IProps {

}

interface IState {
    currentDate: Date;
    selectedDate: Date;
}

class Calendar extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.getFullMonth = this.getFullMonth.bind(this)
        this.dayColour = this.dayColour.bind(this)
    }

    state: IState = {
        currentDate: new Date(),
        selectedDate: new Date(),
    }

    getFullMonth(start: Date) {
        const month = []
        let day = startOfWeek(startOfMonth(start));
        let endDay = endOfWeek(endOfMonth(start));
        while (isBefore(day,endDay)) {
            month.push(day);
            day = add(day,{days:1});
        }
        return month;
    }

    dayColour(day: Date) {
        return isSameDay(day, this.state.currentDate) ? 'calendar-current-day' : isSameDay(day, this.state.selectedDate) ? 'calendar-selected-day' : isSameMonth(day,this.state.selectedDate) ? 'calendar-current-month': 'calendar-standard'; 
    }

    render() {
        return (
            <>
                <div className="calendar-container">
                    <header className="month-name">
                        <h1> <i className="arrow left" onClick={() => this.setState({selectedDate: add(this.state.selectedDate, {months:-1})})}/> {format(this.state.selectedDate,'MMMM yyyy')} <i className="arrow right" onClick={() => this.setState({selectedDate: add(this.state.selectedDate, {months:1})})}/> </h1>
                    </header>
                    <ul className="weekdays">
                        <li className="day-name" key="Sun"><abbr title="S">Sunday</abbr></li>
                        <li className="day-name" key="Mon"><abbr title="M">Monday</abbr></li>
                        <li className="day-name" key="Tue"><abbr title="T">Tuesday</abbr></li>
                        <li className="day-name" key="Wed"><abbr title="W">Wednesday</abbr></li>
                        <li className="day-name" key="Thu"><abbr title="T">Thursday</abbr></li>
                        <li className="day-name" key="Fri"><abbr title="F">Friday</abbr></li>
                        <li className="day-name" key="Sat"><abbr title="S">Saturday</abbr></li>
                    </ul>
                    <div className="calendar-grid">
                        <ol className="day">
                            {this.getFullMonth(this.state.selectedDate).map(
                                (date) => <li key={date.toString()}>
                                        <div className={this.dayColour(date)} onClick={() => this.setState({selectedDate: date})}>
                                            {format(date,'dd')}
                                        </div>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
                <div className="selected-day-events">
                    <h1> Events on {format(this.state.selectedDate, 'dd/MM/YYY')}</h1>
                    <ol className="day">
                        {/* TODO MAP OVER SOME QUERY OF EVENTS OF SELECTED DAY */}
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex, James, Catherine" time="9:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="10:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Sam" time="11:30"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Sam, Alex, Harvey" time="12:15"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                        <li className="calendar-events-items"><CalendarEvent title="Some kinda speaking event" speakers="Alex" time="13:45"/></li>
                    </ol>
                </div>
            </>    
        )
    }
}
export default Calendar;
