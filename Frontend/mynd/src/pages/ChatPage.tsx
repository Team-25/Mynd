import { Grid } from "@material-ui/core";
import React from "react"
import Chat from '../components/Chat/chat'
import '../components/Chat/chat.scss'

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
            <div className="chat-page-container">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div className="people">HELLO</div>
                    </Grid>
                    <Grid item xs={9}>
                        <Chat />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default CalendarPage;
