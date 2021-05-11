import React, { useEffect, useState } from "react"
import { format } from 'date-fns'
import CalendarEvent from "./calendar-event";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

interface IProps {
}

const CalendarUpcoming = (props: IProps) => {

    const currentDate = new Date();
    const [value, loading, error] = useCollection(
        db.collection('events'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

    return (
        <div className="calendar-upcoming-events">
            <h1>{format(currentDate, 'EEEE d MMMM yyyy')}</h1>
            <h2>Your Events Today:</h2>
            <div className="calender-events-list">
                <ul>
                    {value && value.docs.map(
                        (doc) =>
                            doc.data().time.toDate().getDay() ==currentDate.getDay() ? <li className="calendar-events-items"><CalendarEvent title={doc.data().title} speakers={doc.data().speakers.join(',')} time={doc.data().time.toDate()} /></li> : <></>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CalendarUpcoming;
