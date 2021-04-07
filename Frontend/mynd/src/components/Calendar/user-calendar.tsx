import React from "react"

interface IProps {

}

interface IState {
    currentDate: Date;
}

class Calendar extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        currentDate: new Date(),
    }

    render() {
        return (
            <div className="calendar-container">
                <ul className="weekdays">
                    <li className="day-name" key="Sun">Sunday</li>
                    <li className="day-name" key="Mon">Monday</li>
                    <li className="day-name" key="Tue">Tuesday</li>
                    <li className="day-name" key="Wed">Wednesday</li>
                    <li className="day-name" key="Thu">Thursday</li>
                    <li className="day-name" key="Fri">Friday</li>
                    <li className="day-name" key="Sat">Saturday</li>
                </ul>
                <div className="calendar-grid">
                    <ol className="day">
                        Hewwo
                    </ol>
                </div>
            </div>
            
        )
    }
}
export default Calendar;
