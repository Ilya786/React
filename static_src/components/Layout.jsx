import React from 'react';
import Header from './Header';
import MessageField from './MessageField';
import ChatList from './ChatList';
import '../styels/layout.scss';

export default class Layout extends React.Component {
    state = {
        messageList: [],
        messages: {},
        curId: 1,
    };
    componentDidMount() {
        this.handleReply();
    }

    componentDidUpdate(prevProps, prevState) {
        const { messages, messageList, curId } = this.state;
        const lastMessageSender = messages[curId - 1] ? messages[curId - 1].sender : '';
        if (prevState.messageList.length < messageList.length && lastMessageSender === 'me') {
            setTimeout(this.handleReply, 2000);
        }
    }
    handleSendMessage = (input) => {
        const { messageList, messages, curId,} = this.state;
        if (input.length > 0) {
            const newMessageList = [...messageList, curId];
            const newMessages = { ...messages, [curId]: {text: input, sender: 'me'} };
            this.setState({ messages: newMessages, messageList: newMessageList, curId: curId + 1, input: '' })
        }
    };

    handleReply = () => {
        const { messageList, messages, curId } = this.state;
        const newMessageList = [...messageList, curId];
        const newMessages = { ...messages, [curId]: {text: 'Отстань, я робот', sender: 'bot'} };
        this.setState({ messages: newMessages, messageList: newMessageList, curId: curId + 1 })
    };
    render(){
        return (<div className="layout">
            <Header quantityMessage = {this.state.messageList.length} />
            <div className="chatList">
                <ChatList/>
                <MessageField
                    messages={this.state.messages}
                    messageList={this.state.messageList}
                    curId={this.state.curId}
                    handleSendMessage={this.handleSendMessage}
                />
            </div>
        </div>)
    }
}