import React from "react"
import CalendarEvent from "./calendar-event";
import { Grid } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../../firebase";
import { GridSpacing, GridSize } from '@material-ui/core/Grid';
import { useAuthState } from "react-firebase-hooks/auth";

interface IProps {
    date: Date,
    spacing: Number,
    size: Number,
}

const EventGrid = (props: IProps) => {
    const [user] = useAuthState(auth);
    const [value, loading, error] = useCollection(
        db.collection('events').orderBy('time', 'asc'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <Grid container spacing={Number(props.spacing) as GridSpacing}>
            {value && value.docs.map(
                (doc) => doc.data().time.toDate().getDate() == props.date.getDate() && doc.data().time.toDate().getMonth() == props.date.getMonth() && user?.uid == doc.data().uid ? <Grid item xs={Number(props.size) as GridSize}> <li className="calendar-events-items"><CalendarEvent title={doc.data().title} description={doc.data().description} time={doc.data().time.toDate()} /></li> </Grid> : <></>
            )}
        </Grid>
    )
}

export default EventGrid;