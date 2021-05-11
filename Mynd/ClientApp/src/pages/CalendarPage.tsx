import {Grid, Switch} from "@material-ui/core";
import React from "react"
import Calendar from '../components/Calendar/user-calendar'
import CalendarUpcoming from '../components/Calendar/calendar-upcoming'
import '../components/Calendar/user-calendar.scss'
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

interface IProps {
}

const CalendarPage = (props: IProps) => {
    return (
        <>
            <div className="calendar-page">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Switch size="small" onChange={() => document.body.classList.toggle("dark-mode")} />
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
