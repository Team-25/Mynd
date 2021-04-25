import {Grid, Switch} from "@material-ui/core";
import React from "react"
import Calendar from '../components/Calendar/user-calendar'
import CalendarUpcoming from '../components/Calendar/calendar-upcoming'
import '../components/Calendar/user-calendar.scss'

interface IProps {

}

interface IState {
}

class CalendarPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
    }

    render() {
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
}
export default CalendarPage;
