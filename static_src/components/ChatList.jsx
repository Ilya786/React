import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import '../styels/chatList.css';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <Subheader>Recent chats</Subheader>
                <Link to="/chat/1/">
                    <ListItem
                        primaryText="Brendan Lim"
                        leftAvatar={<Avatar src="images/ok-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/2/">
                    <ListItem
                        primaryText="Eric Hoffman"
                        leftAvatar={<Avatar src="images/kolage-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/3/">
                    <ListItem
                        primaryText="Grace Ng"
                        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/4/">
                    <ListItem
                        primaryText="Kerem Suer"
                        leftAvatar={<Avatar src="images/kerem-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
                <Link to="/chat/5/">
                    <ListItem
                        primaryText="Raquel Parrado"
                        leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                </Link>
            </List>)
    }
}