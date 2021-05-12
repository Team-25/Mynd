import React from "react"
import { format, startOfMonth, startOfWeek, isBefore, endOfWeek, add , endOfMonth, isSameMonth, isSameDay} from 'date-fns'
import CalendarEvent from "./calendar-event";
import { Grid } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

interface IProps {
    currentDate: Date;
    selectedDate: Date;
}

const CalendarSelected = (props: IProps) => {
    const [value, loading, error] = useCollection(
        db.collection('events').orderBy('time', 'asc'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <div className="selected-day-events">
            <h1> Events on {format(props.selectedDate, 'dd MMMM YYY')}</h1>
            <Grid container spacing={2}>
                {value && value.docs.map(
                    (doc) => doc.data().time.toDate().getDate() == props.selectedDate.getDate() && doc.data().time.toDate().getMonth() == props.selectedDate.getMonth() ? <Grid item xs={4}> <li className="calendar-events-items"><CalendarEvent title={doc.data().title} speakers={doc.data().speakers} time={doc.data().time.toDate()} /></li> </Grid> : <></>
                )}
            </Grid>
        </div>
    )
}

export default CalendarSelected;