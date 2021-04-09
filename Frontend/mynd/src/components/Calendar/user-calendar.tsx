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
        selectedDate: add(new Date(), {days:1}),
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
                        <h2>  {format(this.state.selectedDate,'MMMM yyyy')}  </h2>
                        <span className="calendar-arrows" onClick={() => this.setState({selectedDate: add(this.state.selectedDate, {months:-1})})}>&#8592;</span>
                        <span className="calendar-arrows" onClick={() => this.setState({selectedDate: this.state.currentDate})}>Today</span>
                        <span className="calendar-arrows" onClick={() => this.setState({selectedDate: add(this.state.selectedDate, {months:1})})}>&#8594;</span>
                    </header>
                    <ul className="weekdays">
                        {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((day) =>
                            <li className="day-name" key={day}><abbr title={day[0]}>{day}</abbr></li>
                        )}
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
                    <h1> Events on {format(this.state.selectedDate, 'dd MMMM YYY')}</h1>
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
