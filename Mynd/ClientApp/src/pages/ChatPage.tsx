import Chat from '../components/Chat/chat'
import '../components/Chat/chat.scss'
import ChatSidebar from '../components/Chat/chat-sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

interface IProps {
}

const ChatPage = (props: IProps) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/chat/:roomId'>
                        <Chat />
                    </Route>
                    <Route path='/chat/'>
                    <ChatSidebar />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default ChatPage;
