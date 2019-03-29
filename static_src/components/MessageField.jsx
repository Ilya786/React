import React from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styels/messages.scss';
export default class MessageField extends React.Component {
    state = {
        messageList: [],
        messages: {},
        curId: 1,
        input: '',
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

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = () => {
        const { messageList, messages, curId, input } = this.state;
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

    handleKeyUp = (evt) => {
        if (evt.keyCode === 13) { // Enter
            this.handleSendMessage();
        }
    };

    render() {
        const { messageList, messages } = this.state;

        const messageComponents = messageList.map((messageId, index) =>
            <Message
                key={ index }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        );

        return (
            <div className="message-box">
                <div className="message-field">
                    { messageComponents }
                </div>
                <div style={{ textAlign: 'center' }}>
                    <TextField
                        name="input"
                        hintText="Hint Text"
                        value={ this.state.input }
                        onChange={ this.handleInput }
                        onKeyUp={ this.handleKeyUp }
                    />
                    <FloatingActionButton style={{ }} onClick={ this.handleSendMessage }>
                        <SendIcon />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}