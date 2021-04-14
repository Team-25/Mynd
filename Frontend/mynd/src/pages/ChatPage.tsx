import { Grid } from "@material-ui/core";
import React from "react"
import Chat from '../components/Chat/chat'
import '../components/Chat/chat.scss'

interface IProps {
}

const ChatPage = (props: IProps) => {
    return (
        <div className="chat-page-container">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <div className="people">HELLO</div>
                </Grid>
                <Grid item xs={10}>
                    <Chat />
                </Grid>
            </Grid>
        </div>
    )
}

export default ChatPage;
