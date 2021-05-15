import { Button, TextField } from "@material-ui/core";
import firebase from "firebase";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";

interface IProps {
}

const AddEvent = (props: IProps) => {
    const [user] = useAuthState(auth);

    const [state, setState] = useState({
        description: "",
        time: new Date(),
        title: "",
        uid: user?.uid,
      })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        db.collection('events').add({
            description:state.description,
            time:firebase.firestore.Timestamp.fromDate(new Date(state.time)),
            title:state.title,
            uid: user?.uid,
        })
        if (user) {
            setState({
                description: "",
                time: new Date(),
                title: "",
                uid: user.uid,
            });
        }
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
                    id="description"
                    label="Description"
                    type="text"
                    value={state.description}
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