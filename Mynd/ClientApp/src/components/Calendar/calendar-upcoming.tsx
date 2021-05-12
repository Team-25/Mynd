import { format } from 'date-fns'
import EventGrid from './events-grid';

interface IProps {
}

const CalendarUpcoming = (props: IProps) => {

    const currentDate = new Date();

    return (
        <div className="calendar-upcoming-events">
            <h1>{format(currentDate, 'EEEE d MMMM yyyy')}</h1>
            <h2>Events Today:</h2>
            <div className="calender-events-list">
                <EventGrid date={currentDate} spacing={0} size={12}/>
            </div>
        </div>
    )
}

export default CalendarUpcoming;
