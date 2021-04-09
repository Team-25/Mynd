import React from "react"
import { format, startOfMonth, startOfWeek, isBefore, endOfWeek, add , endOfMonth, isSameMonth, isSameDay} from 'date-fns'
import CalendarEvent from "./calendar-event";
import { Grid } from "@material-ui/core";

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
                    <Grid container spacing={2}>
                        {/* TODO QUERY EVENTS OF SELECTED DAY */}
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
                        "title": "Lorem Ipsum amiright",
                        "speakers": "Bob",
                        "time": "23:35",
                        }, {
                        "title": "John i think",
                        "speakers": "John",
                        "time": "23:45",
                        }].map(
                            (data) => <Grid item xs={4}>
                            <li className="calendar-events-items"><CalendarEvent title={data.title} speakers={data.speakers} time={data.time}/></li>
                        </Grid>
                        )}
                    </Grid>
                </div>
            </>    
        )
    }
}
export default Calendar;
