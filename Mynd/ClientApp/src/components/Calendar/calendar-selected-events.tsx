import React from "react"
import { format } from 'date-fns'
import EventGrid from './events-grid';

interface IProps {
    currentDate: Date;
    selectedDate: Date;
}

const CalendarSelected = (props: IProps) => {
    return (
        <div className="selected-day-events">
            <h1> Events on {format(props.selectedDate, 'dd MMMM YYY')}</h1>
            <EventGrid date={props.selectedDate} spacing={2} size={4}/>
        </div>
    )
}

export default CalendarSelected;