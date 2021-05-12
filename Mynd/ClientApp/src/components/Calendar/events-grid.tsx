import React from "react"
import CalendarEvent from "./calendar-event";
import { Grid } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { GridSpacing, GridSize } from '@material-ui/core/Grid';

interface IProps {
    date: Date,
    spacing: Number,
    size: Number,
}

const EventGrid = (props: IProps) => {
    const [value, loading, error] = useCollection(
        db.collection('events').orderBy('time', 'asc'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <Grid container spacing={Number(props.spacing) as GridSpacing}>
            {value && value.docs.map(
                (doc) => doc.data().time.toDate().getDate() == props.date.getDate() && doc.data().time.toDate().getMonth() == props.date.getMonth() ? <Grid item xs={Number(props.size) as GridSize}> <li className="calendar-events-items"><CalendarEvent title={doc.data().title} speakers={doc.data().speakers} time={doc.data().time.toDate()} /></li> </Grid> : <></>
            )}
        </Grid>
    )
}

export default EventGrid;