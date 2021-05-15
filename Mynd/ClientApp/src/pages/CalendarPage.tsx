import {Grid, Switch} from "@material-ui/core";
import React, { useState, useEffect } from "react"
import Calendar from '../components/Calendar/user-calendar'
import CalendarUpcoming from '../components/Calendar/calendar-upcoming'
import AddEvent from '../components/Calendar/add-event';
import '../components/Calendar/user-calendar.scss'
import Button from '@material-ui/core/Button';

interface IProps {
}

const CalendarPage = (props: IProps) => {
    const hr = new Date().getHours();
    const [isHidden, setIsHidden] = useState(true);

    function toggleHidden() {
        setIsHidden(!isHidden);
    }

    useEffect(() => {
        (hr > 19 || hr < 5) ? document.body.classList.toggle("dark-mode", true) : document.body.classList.toggle("dark-mode", false);
    })

    return (
        <>
            <div className="calendar-page">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={toggleHidden}>Add an Event</Button>
                        {!isHidden && <div id="add-event" className="add-event-calendar">
                         <AddEvent />
                        </div> }
                        <CalendarUpcoming />
                    </Grid>
                    <Grid item xs={9}>
                        <Calendar />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default CalendarPage;
