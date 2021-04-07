import React from "react"
import { format, startOfMonth, startOfWeek, getDate, isBefore, endOfWeek, add , endOfMonth} from 'date-fns'
import './user-calendar.scss'
import Day from './day'

interface IProps {

}

interface IState {
    currentDate: Date;
}

class Calendar extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.getFullMonth = this.getFullMonth.bind(this)
    }

    state: IState = {
        currentDate: new Date(),
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

    render() {
        return (
            <div className="calendar-container">
                <header className="month-name">
                    <h1>{format(this.state.currentDate,'MMMM yyyy')}</h1>
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
                        {this.getFullMonth(this.state.currentDate).map(
                            (date) => <li key={date.toString()}><Day date={date}/></li>
                        )}
                    </ol>
                </div>
            </div>
            
        )
    }
}
export default Calendar;
