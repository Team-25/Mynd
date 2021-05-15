import React from "react"
import { format, startOfMonth, startOfWeek, isBefore, endOfWeek, add , endOfMonth, isSameMonth, isSameDay} from 'date-fns'
import CalendarEvent from "./calendar-event";
import { Grid } from "@material-ui/core";
import CalendarSelected from './calendar-selected-events'

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
                                (date) => <li className="calendar-li" key={date.toString()}>
                                        <div className={this.dayColour(date)} onClick={() => this.setState({selectedDate: date})}>
                                            {format(date,'dd')}
                                        </div>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
                <CalendarSelected currentDate={this.state.currentDate} selectedDate={this.state.selectedDate}/>
            </>    
        )
    }
}

export default Calendar;
