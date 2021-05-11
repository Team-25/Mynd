import {Grid, Switch} from "@material-ui/core";
import React, { useState } from "react"
import Calendar from '../components/Calendar/user-calendar'
import CalendarUpcoming from '../components/Calendar/calendar-upcoming'
import AddEvent from '../components/Calendar/add-event';
import '../components/Calendar/user-calendar.scss'
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Button from '@material-ui/core/Button';

interface IProps {
}

const CalendarPage = (props: IProps) => {
    const [isHidden, setIsHidden] = useState(true);

    function toggleHidden() {
        setIsHidden(!isHidden);
      }

    return (
        <>
            <div className="calendar-page">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Switch size="small" onChange={() => document.body.classList.toggle("dark-mode")} />
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
