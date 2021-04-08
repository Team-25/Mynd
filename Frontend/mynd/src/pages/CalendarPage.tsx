import Grid from "@material-ui/core/Grid";
import React from "react"
import Calendar from '../components/Calendar/user-calendar'
import CalendarUpcoming from '../components/Calendar/calendar-upcoming'

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
            <div className="calendar-page">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CalendarUpcoming />
                    </Grid>
                    <Grid item xs={9}>
                        <Calendar />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default CalendarPage;
