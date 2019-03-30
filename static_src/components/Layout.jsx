import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styels/layout.scss';
import PropTypes from "prop-types";


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    defaultProps = {
        chatIdId: 1,
    };
    // state = {
    //     messageList: [],
    //     messages: {},
    //     curId: 1,
    // };

    // componentDidMount() {
    //     this.handleReply();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     const { messages, messageList, curId } = this.state;
    //     const lastMessageSender = messages[curId - 1] ? messages[curId - 1].sender : '';
    //     if (prevState.messageList.length < messageList.length && lastMessageSender === 'me') {
    //         setTimeout(this.handleReply, 2000);
    //     }
    // }

    // handleSendMessage = (input) => {
    //     const { messageList, messages, curId } = this.state;
    //     if (input.length > 0) {
    //         const newMessageList = [...messageList, curId];
    //         const newMessages = { ...messages, [curId]: {text: input, sender: 'me'} };
    //         this.setState({ messages: newMessages, messageList: newMessageList, curId: curId + 1})
    //     }
    // };
    //
    // handleReply = () => {
    //     const { messageList, messages, curId } = this.state;
    //     const newMessageList = [...messageList, curId];
    //     const newMessages = { ...messages, [curId]: {text: 'Отстань, я робот', sender: 'bot'} };
    //     this.setState({ messages: newMessages, messageList: newMessageList, curId: curId + 1 })
    // };

    render() {
        return (
            [
                <Header />,
                <div className="layout">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField />
                    </div>
                </div>
            ]
        )
    }
}