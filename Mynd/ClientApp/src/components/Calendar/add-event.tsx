import { Button, TextField } from "@material-ui/core";
import firebase from "firebase";
import React, { useState } from "react";
import { db } from "../../firebase";

interface IProps {
}

const AddEvent = (props: IProps) => {

    const [state, setState] = useState({
        speakers: "",
        time: new Date(),
        title: "",
      })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        console.log(state);
        db.collection('events').add({
            speakers:state.speakers,
            time:firebase.firestore.Timestamp.fromDate(new Date(state.time)),
            title:state.title,
        })
        setState({
            speakers: "",
            time: new Date(),
            title: "",
        });
      };

      const handleChange = (e: any) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.id]: value
        });
      };

    return (
        <div className="add-event-calendar">
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <TextField
                    id="title"
                    label="Title"
                    type="text"
                    value={state.title}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="speakers"
                    label="Speakers"
                    type="text"
                    value={state.speakers}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Date/Time"
                    type="datetime-local"
                    value={state.time}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary"> Submit </Button>
            </form>
        </div>
    )
}

export default AddEvent;